
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatedSection } from '@/components/animated-section';
import { v4 as uuidv4 } from 'uuid';

export default function AffiliatePage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd handle user creation in your backend (e.g., Firebase Auth)
        // For this demo, we'll generate a unique ID and redirect.
        console.log('Signing up with:', { name, email, password });
        const affiliateId = name.toLowerCase().replace(/\s+/g, '-') || uuidv4().slice(0, 8);
        router.push(`/affiliate/${affiliateId}`);
    };

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd authenticate the user and get their affiliate ID.
        // For this demo, we'll use a mock ID based on the email.
        console.log('Signing in with:', { email, password });
        const affiliateId = email.split('@')[0] || 'default-user';
        router.push(`/affiliate/${affiliateId}`);
    };


    return (
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
            <AnimatedSection className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-4xl font-bold font-headline">Join Our Affiliate Program</h1>
                <p className="max-w-2xl text-muted-foreground">
                    Partner with Ionora and earn commissions by promoting the best water ionizers on the market. Get access to your own dashboard, unique tracking links, and marketing materials.
                </p>
            </AnimatedSection>

            <AnimatedSection delay={200} className="mt-12 flex justify-center">
                 <Tabs defaultValue="sign-up" className="w-full max-w-md">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
                        <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sign-up">
                        <Card>
                            <CardHeader>
                                <CardTitle>Create Your Affiliate Account</CardTitle>
                                <CardDescription>
                                    Sign up to get your unique referral links and start earning.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSignUp} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input 
                                            id="name" 
                                            type="text" 
                                            placeholder="John Doe" 
                                            required 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email-signup">Email</Label>
                                        <Input 
                                            id="email-signup" 
                                            type="email" 
                                            placeholder="name@example.com" 
                                            required 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password-signup">Password</Label>
                                        <Input 
                                            id="password-signup" 
                                            type="password" 
                                            required 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Create Account
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="sign-in">
                        <Card>
                            <CardHeader>
                                <CardTitle>Welcome Back</CardTitle>
                                <CardDescription>
                                    Sign in to access your affiliate dashboard.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSignIn} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email-signin">Email</Label>
                                        <Input 
                                            id="email-signin" 
                                            type="email" 
                                            placeholder="name@example.com" 
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password-signin">Password</Label>
                                        <Input 
                                            id="password-signin" 
                                            type="password" 
                                            required 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Sign In
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </AnimatedSection>
        </div>
    );
}
