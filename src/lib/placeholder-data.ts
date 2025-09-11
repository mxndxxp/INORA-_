import type { Product, Brand, Testimonial, ScienceConcept } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';

const getImageUrl = (id: string) => PlaceHolderImages.find(p => p.id === id)?.imageUrl;

export const placeholderData: {
  products: Product[];
  brands: Brand[];
  testimonials: Testimonial[];
  scienceConcepts: ScienceConcept[];
} = {
  products: [
    {
      id: 'p1',
      name: 'Aqua-Ionizer Deluxe 9.0',
      brand: 'Life Ionizers',
      price: 149000,
      imageId: 'product-1',
      description: 'Top-of-the-line model with 9 plates and a wide pH range.',
      specs: { phRange: '2.5-11.5', orpRange: '+600 to -860mV', plates: '9 Titanium Platinum-Coated' },
    },
    {
      id: 'p2',
      name: 'KYK Generation II',
      brand: 'KYK',
      price: 125000,
      imageId: 'product-2',
      description: 'A reliable and efficient ionizer for modern kitchens.',
      specs: { phRange: '4.0-10.0', orpRange: '+500 to -400mV', plates: '7 Titanium Platinum-Coated' },
    },
    {
      id: 'p3',
      name: 'Tyent UCE-11',
      brand: 'Tyent',
      price: 249000,
      imageId: 'product-3',
      description: 'Under-counter model with 11 plates for maximum power.',
      specs: { phRange: '1.7-12.0', orpRange: '+900 to -1050mV', plates: '11 Solid/Mesh Hybrid' },
    },
  ],
  brands: [
    { id: 'b1', name: 'Life Ionizers', logoId: 'brand-life-ionizers', logoUrl: getImageUrl('brand-life-ionizers') },
    { id: 'b2', name: 'Mediqua', logoId: 'brand-mediqua', logoUrl: getImageUrl('brand-mediqua') },
    { id: 'b3', name: 'KYK', logoId: 'brand-kyk', logoUrl: getImageUrl('brand-kyk') },
    { id: 'b4', name: 'Enagic', logoId: 'brand-enagic', logoUrl: getImageUrl('brand-enagic') },
    { id: 'b5', name: 'Tyent', logoId: 'brand-tyent', logoUrl: getImageUrl('brand-tyent') },
    { id: 'b6', name: 'Alkamedi', logoId: 'brand-alkamedi', logoUrl: getImageUrl('brand-alkamedi') },
    { id: 'b7', name: 'ZeroB', logoId: 'brand-zerob', logoUrl: getImageUrl('brand-zerob') },
    { id: 'b8', name: 'Medisoul', logoId: 'brand-medisoul', logoUrl: getImageUrl('brand-medisoul') },
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Rohan Sharma',
      location: 'Mumbai, India',
      avatarId: 'testimonial-1',
      quote: 'Since using the water ionizer from Ionora, I feel more energetic and hydrated throughout the day. The customer support was excellent!',
    },
    {
      id: 't2',
      name: 'Priya Desai',
      location: 'Bangalore, India',
      avatarId: 'testimonial-2',
      quote: 'I was skeptical at first, but the difference in water taste and quality is undeniable. My family loves it. The comparison tool helped me choose the perfect model.',
    },
    {
      id: 't3',
      name: 'Amit Patel',
      location: 'Ahmedabad, India',
      avatarId: 'testimonial-3',
      quote: 'As a health-conscious person, I appreciate the detailed scientific information on their website. It helped me understand the benefits of ionized water.',
    },
  ],
  scienceConcepts: [
    {
      id: 'sc1',
      title: 'Electrolysis',
      description: 'The process of using electricity to separate water into alkaline and acidic components.',
      icon: 'ElectrolysisIcon',
      concept: 'Electrolysis'
    },
    {
      id: 'sc2',
      title: 'Understanding ORP',
      description: 'A measure of water\'s ability to act as an antioxidant.',
      icon: 'OrpIcon',
      concept: 'ORP (Oxidation-Reduction Potential)'
    },
    {
      id: 'sc3',
      title: 'The pH Scale',
      description: 'Learn how water is measured as alkaline or acidic.',
      icon: 'PhScaleIcon',
      concept: 'The pH Scale & Alkalinity'
    },
    {
      id: 'sc4',
      title: 'Microclustering',
      description: 'How ionized water may be more easily absorbed by the body.',
      icon: 'MicroclusteringIcon',
      concept: 'Microclustering'
    },
    {
        id: 'sc5',
        title: 'Hydrogen-Rich Water',
        description: 'Discover the therapeutic potential of molecular hydrogen.',
        icon: 'HydrogenIcon',
        concept: 'Hydrogen-Rich Water'
      },
  ],
};
