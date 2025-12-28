
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'tank' | 'stand' | 'bundle';
  priceRange: string;
  specs: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  type: 'Residential' | 'Farm' | 'Industrial';
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface LeadInfo {
  name: string;
  phone: string;
  suburb: string;
  tankSize: string;
  standHeight: string;
  timeline: string;
  budget: string;
}
