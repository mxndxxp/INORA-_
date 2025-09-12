import Image from 'next/image';
import { placeholderData } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/animated-section';

export default function CertificationsPage() {
  const certifications = placeholderData.certifications;

  return (
    <div className="bg-background">
      <section className="py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Our Certifications
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We are committed to the highest standards of quality, safety, and performance. Our products are backed by globally recognized certifications.
            </p>
          </div>
        </div>
      </section>
      <AnimatedSection className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => {
              const certImage = PlaceHolderImages.find((p) => p.id === cert.imageId);
              return (
                <div key={cert.id} className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                  {certImage && (
                    <div className="relative mb-4 h-32 w-full">
                      <Image
                        alt={cert.title}
                        className="object-contain"
                        fill
                        src={certImage.imageUrl}
                        data-ai-hint={certImage.imageHint}
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    This certification ensures our commitment to quality management and customer satisfaction.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
