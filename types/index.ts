export interface Category {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category_id: string;
  base_price: number;
  material: string | null;
  care_instructions: string | null;
  created_at: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  color_name: string;
  color_hex: string;
  stock: number;
  price_override: number | null;
}

export interface ProductImage {
  id: string;
  variant_id: string;
  image_url: string;
  sort_order: number;
}

export interface Size {
  id: string;
  label: string;
}

export interface VariantSize {
  variant_id: string;
  size_id: string;
  stock: number;
}

export interface CartItem {
  variantId: string;
  productId: string;
  name: string;
  colorName: string;
  colorHex: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  role: "student" | "admin";
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  status: "pending" | "paid" | "pickup" | "completed" | "cancelled";
  total: number;
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  variant_id: string;
  size: string;
  quantity: number;
  price: number;
}

export interface DesignAsset {
  id: string;
  name: string;
  type: "logo" | "pattern" | "base_garment";
  image_url: string;
  category: string | null;
}

export type ProductWithVariants = Product & {
  category?: Category;
  variants: (ProductVariant & {
    images: ProductImage[];
    sizes: (VariantSize & { size: Size })[];
  })[];
};
