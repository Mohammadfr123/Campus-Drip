export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  color: string;
  collection: 'Men' | 'Women' | 'Community';
}

export const PRODUCTS: Product[] = [
  // MEN
  {
    id: 'm1',
    name: 'SCHOLAR ATHLETE HOODIE',
    price: 3200,
    category: 'Hoodies',
    collection: 'Men',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    description: 'Double-lined premium fleece. Engineered for the Beau Plan breeze.',
    color: '#B58E24'
  },
  {
    id: 'm2',
    name: 'URBAN CARGO PANTS',
    price: 2500,
    category: 'Pants',
    collection: 'Men',
    image: 'https://images.unsplash.com/photo-1624372333454-359f975d7182?auto=format&fit=crop&q=80&w=800',
    description: 'Multi-pocket heavy duty utility pants for campus life.',
    color: '#1a1a1a'
  },
  {
    id: 'm3',
    name: 'CLASSIC BUTTON DOWN',
    price: 1800,
    category: 'Shirts',
    collection: 'Men',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    description: 'Crisp button-down with a modern relaxed fit.',
    color: '#F5F5F5'
  },
  {
    id: 'm4',
    name: 'ESSENTIAL CAMPUS TEE',
    price: 950,
    category: 'T-Shirts',
    collection: 'Men',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    description: 'Heavyweight cotton oversized t-shirt.',
    color: '#B58E24'
  },

  // WOMEN
  {
    id: 'w1',
    name: 'DRIP CROPPED HOODIE',
    price: 2800,
    category: 'Hoodies',
    collection: 'Women',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    description: 'Premium weight cropped hoodie with elastic waist.',
    color: '#B58E24'
  },
  {
    id: 'w2',
    name: 'ALCHE SIGNATURE TEE',
    price: 1100,
    category: 'T-Shirts',
    collection: 'Women',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    description: 'Soft-touch organic cotton. Tailored for comfort.',
    color: '#B58E24'
  },
  {
    id: 'w3',
    name: 'RELAXED CHINOS',
    price: 2200,
    category: 'Pants',
    collection: 'Women',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant tailored chinos for a professional student look.',
    color: '#111111'
  },
  {
    id: 'w4',
    name: 'OFFICE STREET SHIRT',
    price: 1600,
    category: 'Shirts',
    collection: 'Women',
    image: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&q=80&w=800',
    description: 'Linen blend shirt for those long study sessions.',
    color: '#FFFFFF'
  },

  // COMMUNITY
  {
    id: 'c1',
    name: 'ELEGANCE ABAYA',
    price: 4500,
    category: 'Abayas',
    collection: 'Community',
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=800',
    description: 'Premium lightweight fabric. Minimalist design for everyday elegance.',
    color: '#000000'
  },
  {
    id: 'c2',
    name: 'MODERN THOBE',
    price: 4200,
    category: 'Thobes',
    collection: 'Community',
    image: 'https://images.unsplash.com/photo-1632342880029-79659e984252?auto=format&fit=crop&q=80&w=800',
    description: 'Contemporary cut thobe with subtle embroidery.',
    color: '#ffffff'
  },
  {
    id: 'c3',
    name: 'PREMIUM CHIFFON HIJAB',
    price: 850,
    category: 'Hijab',
    collection: 'Community',
    image: 'https://images.unsplash.com/photo-1581404917879-53e19259fdda?auto=format&fit=crop&q=80&w=800',
    description: 'Breathable, high-quality chiffon-silk blend.',
    color: '#B58E24'
  }
];
