import type { ScienceIcons } from "@/components/science-icons";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageId: string;
  description: string;
  specs: {
    phRange: string;
    orpRange: string;
    plates: string;
  };
};

export type Brand = {
  id: string;
  name: string;
  logoId: string;
  logoUrl?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  avatarId: string;
  quote: string;
};

export type ScienceConcept = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof ScienceIcons;
  concept: string;
};
