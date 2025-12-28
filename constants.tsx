
import React from 'react';
import { Settings, Droplets, Construction, Wrench, ShieldCheck, Truck, Clock, Briefcase } from 'lucide-react';
import { Service, Product, Testimonial, GalleryItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'stands',
    title: 'Steel Tank Stands',
    description: 'Precision-engineered stands from 1m to 9m. Built for durability and extreme loads.',
    icon: 'Construction',
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/bxr/wm3/x4k/RecentWork1.jpg',
    features: ['High-grade mild steel', 'Anti-corrosion coating', 'Certified welding']
  },
  {
    id: 'tanks',
    title: 'Water Tanks',
    description: 'Supplying top brands with UV protection. Sizes from 1,000L to 10,000L.',
    icon: 'Droplets',
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/jp0/u2r/lxb/SteelStands.jpg',
    features: ['UV protected', 'Food-grade lining', 'Full range of sizes']
  },
  {
    id: 'installation',
    title: 'Full Installation',
    description: 'Turnkey solutions: concrete base construction, plumbing, and tank mounting.',
    icon: 'Settings',
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/8uq/xw4/qpu/RecentWork2.jpg',
    features: ['Concrete footings', 'Borehole integration', 'Booster pumps']
  },
  {
    id: 'repair',
    title: 'Repairs & Reinforcement',
    description: 'Emergency repair for leaning or rusting stands. On-site welding and repainting.',
    icon: 'Wrench',
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/m55/3z7/33w/MrTankStandABOUTimage.jpeg',
    features: ['Structural reinforcement', 'Sandblasting', 'Leak prevention']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 't1',
    name: '1000L Water Tank',
    category: 'tank',
    priceRange: '$100',
    specs: ['UV resistant', 'Food-grade', 'Reliable storage'],
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/qgh/i86/g9x/1000L%20image.jpeg'
  },
  {
    id: 't2',
    name: '2000L Water Tank',
    category: 'tank',
    priceRange: '$170',
    specs: ['Popular size', 'Winter/Summer UV resistant', 'FDA approved'],
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/8uq/xw4/qpu/RecentWork2.jpg'
  },
  {
    id: 't3',
    name: '5000L Water Tank',
    category: 'tank',
    priceRange: '$330',
    specs: ['Bulk storage', 'High capacity', '10-year warranty'],
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/bgq/ask/cbu/5000L%20image.jpeg'
  },
  {
    id: 't4',
    name: '10000L Water Tank',
    category: 'tank',
    priceRange: '$995',
    specs: ['Maximum capacity', 'Heavy duty', 'Large scale storage'],
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/bgq/ask/cbu/5000L%20image.jpeg'
  },
  {
    id: 's1',
    name: '3m Stand (2000L)',
    category: 'stand',
    priceRange: '$220',
    specs: ['Certified welding', 'Mild steel', 'Anti-rust primer'],
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/tf9/beo/yb3/RecentWork4.jpg'
  },
  {
    id: 's1-4',
    name: '4m Stand (2000L)',
    category: 'stand',
    priceRange: '$240',
    specs: ['Precision height', 'Extra pressure', 'Industrial paint'],
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/tf9/beo/yb3/RecentWork4.jpg'
  },
  {
    id: 's2',
    name: '6m Stand (5000L)',
    category: 'stand',
    priceRange: '$500',
    specs: ['Industrial grade', 'Heavy duty', 'Certified structure'],
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/bxr/wm3/x4k/RecentWork1.jpg'
  },
  {
    id: 's3',
    name: '6m Stand (10000L)',
    category: 'stand',
    priceRange: '$800',
    specs: ['Reinforced tower', 'Mega-tank support', 'Maximum safety'],
    image: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/bxr/wm3/x4k/RecentWork1.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. T. Moyo',
    location: 'Mount Pleasant, Harare',
    content: "Excellent service. The 6m stand is rock solid and the installation was done in one day. Highly recommend for residential work.",
    type: 'Residential',
    rating: 5
  },
  {
    id: 't2',
    name: 'Farmer John',
    location: 'Mazowe District',
    content: "Bulk order for my farm was handled professionally. 10 stands installed perfectly. They understand agricultural needs.",
    type: 'Farm',
    rating: 5
  },
  {
    id: 't3',
    name: 'Apex Construction',
    location: 'Mbare Industrial',
    content: "Mr Tank Stand is our go-to for all housing projects. Fast, reliable, and their prices for bulk orders are the best in Harare.",
    type: 'Industrial',
    rating: 5
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: '6m Premium Setup', category: 'Residential', imageUrl: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/jp0/u2r/lxb/SteelStands.jpg' },
  { id: 'g2', title: '5000L Bulk System', category: 'Farm', imageUrl: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/jp0/u2r/lxb/SteelStands.jpg' },
  { id: 'g3', title: '3m Residential Stand', category: 'Home', imageUrl: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/jp0/u2r/lxb/SteelStands.jpg' },
  { id: 'g4', title: 'Borehole Integration', category: 'Industrial', imageUrl: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/jp0/u2r/lxb/SteelStands.jpg' },
  { id: 'g5', title: 'Industrial Grade Tower', category: 'Industrial', imageUrl: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/jp0/u2r/lxb/SteelStands.jpg' },
  { id: 'g6', title: 'Clinic Water Security', category: 'Healthcare', imageUrl: 'https://af6815798a.imgdist.com/pub/bfra/knkjywkm/jp0/u2r/lxb/SteelStands.jpg' }
];

export const CONTACT_INFO = {
  address: '123 Samora Machel Ave, Harare, Zimbabwe',
  phone: '+263 774 887 686',
  whatsapp: '263774887686',
  email: 'sales@mrtankstand.co.zw',
  hours: 'Mon - Fri: 8am - 5pm, Sat: 8am - 1pm',
  emergency: '+263 774 887 686'
};

/**
 * Generates a pre-populated WhatsApp link based on the provided message.
 */
export const getWhatsAppUrl = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;
};
