export const SITE_NAME = "Campus Drip";
export const SITE_TAGLINE = "ALC Mauritius · Beau Plan";
export const SITE_DESCRIPTION =
  "The campus streetwear marketplace for ALC students in Beau Plan, Mauritius.";

export const CATEGORIES = [
  { slug: "shirts", name: "Shirts", icon: "shirt" },
  { slug: "t-shirts", name: "T-Shirts", icon: "tshirt" },
  { slug: "pants", name: "Pants", icon: "pants" },
  { slug: "jeans", name: "Jeans", icon: "jeans" },
  { slug: "jackets", name: "Jackets", icon: "jacket" },
  { slug: "pullovers", name: "Pullovers", icon: "pullover" },
  { slug: "hoodies", name: "Hoodies", icon: "hoodie" },
  { slug: "caps", name: "Caps", icon: "cap" },
  { slug: "sneakers", name: "Sneakers", icon: "sneaker" },
  { slug: "accessories", name: "Accessories", icon: "accessory" },
] as const;

export const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/design", label: "Design Studio" },
  { href: "/about", label: "About" },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
  twitter: "https://twitter.com",
} as const;

export const ALLOWED_EMAIL_DOMAIN = "alc.mauritius.edu";
