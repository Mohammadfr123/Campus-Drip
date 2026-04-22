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
    name: 'ALCHE VARSITY HOODIE',
    price: 3200,
    category: 'Hoodies',
    collection: 'Men',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    description: 'Double-lined premium fleece. Engineered for the Beau Plan breeze.',
    color: '#ebff00'
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
    name: 'STREET OXFORD SHIRT',
    price: 1800,
    category: 'Shirts',
    collection: 'Men',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    description: 'Crisp button-down with a modern relaxed fit.',
    color: '#ffffff'
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
    color: '#ff0055'
  },
  {
    id: 'w2',
    name: 'ALCHE SIGNATURE TEE',
    price: 1100,
    category: 'T-Shirts',
    collection: 'Women',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    description: 'Soft-touch organic cotton. Tailored for comfort.',
    color: '#ebff00'
  },
  {
    id: 'w3',
    name: 'MODULAR JOGGERS',
    price: 2200,
    category: 'Pants',
    collection: 'Women',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    description: 'High-waisted technical joggers with hidden pockets.',
    color: '#111111'
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
    name: 'SILK TOUCH HIJAB',
    price: 850,
    category: 'Hijab',
    collection: 'Community',
    image: 'https://images.unsplash.com/photo-1581404917879-53e19259fdda?auto=format&fit=crop&q=80&w=800',
    description: 'Breathable, high-quality chiffon-silk blend.',
    color: '#ffea00'
  }
];
