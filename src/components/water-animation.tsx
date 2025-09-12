"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const MAX_RIPPLES = 12;

const vertexShader = `
  precision highp float;
  uniform float uTime; uniform float uAmp; uniform float uWl; uniform float uSpeed; uniform float uChop;
  uniform float uRippleTime[${MAX_RIPPLES}];
  uniform vec2 uRipplePos[${MAX_RIPPLES}];
  varying vec3 vWorldPos; varying vec3 vNormal; varying float vHeight; varying vec3 vViewDir;

  // Gerstner wave
  vec3 gerstner(vec3 pos, vec2 dir, float steep, float wavelength, float speed, float time){
    float k = 2.0 * 3.14159265 / wavelength;
    float f = k * dot(dir, pos.xz) - speed * time;
    float a = steep / k;
    float y = a * sin(f);
    float dx = dir.x * a * cos(f);
    float dz = dir.y * a * cos(f);
    return vec3(dx, y, dz);
  }

  // ripple function (radial)
  float rippleEffect(vec2 p, vec2 center, float t){
    float d = distance(p, center);
    float speed = 4.0;
    float freq = 12.0;
    float wave = sin(d * freq - t * speed);
    float attenuation = 1.0 / (1.0 + 3.0 * d);
    float envelope = smoothstep(0.0, 1.0, 1.0 - (t*0.6));
    return wave * attenuation * envelope * (1.0 - smoothstep(1.6, 8.0, d));
  }

  void main(){
    vec3 pos = position;
    float t = uTime * uSpeed;

    // base directional gerstner waves
    vec2 d1 = normalize(vec2(1.0, 0.6));
    vec2 d2 = normalize(vec2(-0.7, 0.4));
    vec2 d3 = normalize(vec2(0.3, -1.0));

    vec3 g1 = gerstner(pos, d1, uAmp*0.75, uWl, 1.0, t);
    vec3 g2 = gerstner(pos, d2, uAmp*0.5, uWl*1.4, 0.9, t*1.15);
    vec3 g3 = gerstner(pos, d3, uAmp*0.35, uWl*0.8, 1.2, t*0.8);

    pos += (g1 + g2 + g3) * uChop;

    // add ripples from mouse
    float rip = 0.0;
    for(int i=0;i<${MAX_RIPPLES};i++){
      float rt = uRippleTime[i];
      if(rt > 0.0){
        rip += 0.15 * rippleEffect(pos.xz, uRipplePos[i], (uTime - rt));
      }
    }
    pos.y += rip;
    vHeight = pos.y;

    // approximate normals via finite difference
    float eps = 0.25;
    vec3 pX = position + vec3(eps,0.0,0.0);
    vec3 pZ = position + vec3(0.0,0.0,eps);

    // recompute ripple+gerstner on offsets
    vec3 g1x = gerstner(pX, d1, uAmp*0.75, uWl, 1.0, t);
    vec3 g2x = gerstner(pX, d2, uAmp*0.5, uWl*1.4, 0.9, t*1.15);
    vec3 g3x = gerstner(pX, d3, uAmp*0.35, uWl*0.8, 1.2, t*0.8);
    float ripx = 0.0;
    for(int i=0;i<${MAX_RIPPLES};i++){ float rt = uRippleTime[i]; if(rt>0.0){ ripx += 0.15 * rippleEffect(pX.xz, uRipplePos[i], (uTime - rt)); }}
    vec3 posX = (pX + (g1x+g2x+g3x)*uChop) + vec3(0.0, ripx, 0.0);

    vec3 g1z = gerstner(pZ, d1, uAmp*0.75, uWl, 1.0, t);
    vec3 g2z = gerstner(pZ, d2, uAmp*0.5, uWl*1.4, 0.9, t*1.15);
    vec3 g3z = gerstner(pZ, d3, uAmp*0.35, uWl*0.8, 1.2, t*0.8);
    float ripz = 0.0;
    for(int i=0;i<${MAX_RIPPLES};i++){ float rt = uRippleTime[i]; if(rt>0.0){ ripz += 0.15 * rippleEffect(pZ.xz, uRipplePos[i], (uTime - rt)); }}
    vec3 posZ = (pZ + (g1z+g2z+g3z)*uChop) + vec3(0.0, ripz, 0.0);

    vec3 tangent = normalize(posX - pos);
    vec3 bitangent = normalize(posZ - pos);
    vNormal = normalize(cross(bitangent, tangent));

    vec4 worldPos = modelMatrix * vec4(pos,1.0);
    vWorldPos = worldPos.xyz;
    vViewDir = normalize(cameraPosition - vWorldPos);

    gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPos, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float uTransparency; uniform float uSpec; uniform vec3 uLightDir; uniform float uTime; uniform vec3 uCameraPos;
  varying vec3 vWorldPos; varying vec3 vNormal; varying float vHeight; varying vec3 vViewDir;

  // procedural sky sampling by direction
  vec3 sampleSky(vec3 dir){
    float u = 0.5 + 0.5 * dir.x;
    float v = clamp(dir.y * 0.8 + 0.5, 0.0, 1.0);
    // top color and horizon color
    vec3 top = vec3(0.2, 0.6, 0.9); 
    vec3 mid = vec3(0.7, 0.85, 1.0);
    vec3 bot = vec3(1.0, 0.98, 0.95);
    vec3 col = mix(bot, mix(mid, top, smoothstep(0.4,0.7,v)), smoothstep(0.0,0.3,v));

    // sun highlight (pseudo)
    vec3 sunDir = normalize(vec3(0.0, 0.95, 0.2));
    float sun = pow(max(dot(dir, sunDir), 0.0), 200.0) * 8.0;
    col += sun;
    return col;
  }

  float fresnelSchlick(float cosTheta, float f0){
    return f0 + (1.0 - f0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
  }

  void main(){
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewDir);
    vec3 L = normalize(uLightDir);

    // reflection vector and refraction vector
    vec3 R = reflect(-V, N);
    vec3 refr = refract(-V, N, 0.95); // small eta for subtle refraction

    vec3 reflCol = sampleSky(R);
    vec3 refrCol = sampleSky(refr) * vec3(0.7,0.9,1.0);

    // specular
    float spec = pow(max(dot(reflect(-L,N), V), 0.0), 80.0) * uSpec;

    // fresnel for mix
    float cosTheta = max(dot(N, V), 0.0);
    float fres = fresnelSchlick(cosTheta, 0.02);

    // base water tint based on height/depth
    float depthFactor = smoothstep(-1.5, 2.5, vHeight);
    vec3 base = mix(vec3(0.3, 0.7, 0.9), vec3(0.05, 0.15, 0.25), depthFactor);

    // foam on crests
    float crest = smoothstep(0.35, 0.95, vHeight);
    float upness = 1.0 - pow(max(dot(N, vec3(0.0,1.0,0.0)), 0.0), 3.0);
    float foam = crest * upness;

    // combine
    vec3 color = mix(refrCol * 0.5 + base * 0.5, reflCol, fres);
    color = mix(color, vec3(1.0), clamp(foam*1.8, 0.0, 1.0));
    color += spec * 1.2;

    // fresnel-based alpha (more transparent when looking down)
    float alpha = mix(0.9, 0.1, pow(1.0 - fres, 2.0));
    alpha = mix(alpha, uTransparency, 0.5);

    gl_FragColor = vec4(color, alpha);
  }
`;

export function WaterAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 8, 18);
    
    // Water geometry
    const size = 120;
    const seg = 320;
    const geo = new THREE.PlaneGeometry(size, size, seg, seg);
    geo.rotateX(-Math.PI / 2);

    const ripples = new Array(MAX_RIPPLES).fill(0).map(() => ({
      pos: new THREE.Vector2(0, 0),
      time: -9999,
    }));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uAmp: { value: 0.45 },
        uWl: { value: 4.0 },
        uSpeed: { value: 2.0 },
        uChop: { value: 0.6 },
        uTransparency: { value: 0.78 },
        uSpec: { value: 1.2 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uCameraPos: { value: new THREE.Vector3() },
        uLightDir: { value: new THREE.Vector3(0.5, 0.8, 0.2) },
        uRipplePos: { value: new Array(MAX_RIPPLES).fill(new THREE.Vector2()) },
        uRippleTime: { value: new Float32Array(MAX_RIPPLES) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
    });

    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    
    // Light
    const hemi = new THREE.HemisphereLight(0x88bfff, 0x041829, 0.7);
    scene.add(hemi);

    let lastRipple = 0;
    const pushRipple = (x: number, y: number) => {
      const mouse = new THREE.Vector2((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1);
      const ray = new THREE.Raycaster();
      ray.setFromCamera(mouse, camera);
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const intersect = new THREE.Vector3();
      ray.ray.intersectPlane(plane, intersect);
      if (!intersect) return;
      let idx = lastRipple % MAX_RIPPLES;
      ripples[idx].pos.set(intersect.x, intersect.z);
      ripples[idx].time = performance.now() / 1000.0;
      lastRipple++;
    };
    
    let moveCooldown = 0;
    const onPointerMove = (e: PointerEvent) => {
      const t = performance.now();
      if (t - moveCooldown > 60) { // throttle
        pushRipple(e.clientX, e.clientY);
        moveCooldown = t;
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      pushRipple(e.clientX, e.clientY);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);


    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      mat.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      mat.uniforms.uTime.value = clock.getElapsedTime();
      mat.uniforms.uCameraPos.value.copy(camera.position);

      for (let i = 0; i < MAX_RIPPLES; i++) {
        const r = ripples[i];
        mat.uniforms.uRippleTime.value[i] = r.time > 0 ? r.time : -9999;
        if(r.pos) {
          mat.uniforms.uRipplePos.value[i] = new THREE.Vector2(r.pos.x, r.pos.y);
        }
      }
      
      const t = clock.getElapsedTime();
      camera.position.x = Math.sin(t * 0.05) * 0.6;
      camera.position.y = 7.6 + Math.sin(t * 0.12) * 0.12;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />;
}
