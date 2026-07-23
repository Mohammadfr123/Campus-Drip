import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string, size: string) => void;
  updateQuantity: (variantId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.variantId === item.variantId && i.size === item.size
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.variantId === item.variantId && i.size === item.size
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),

      removeItem: (variantId, size) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.variantId === variantId && i.size === size)
          ),
        })),

      updateQuantity: (variantId, size, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter(
                  (i) => !(i.variantId === variantId && i.size === size)
                )
              : state.items.map((i) =>
                  i.variantId === variantId && i.size === size
                    ? { ...i, quantity }
                    : i
                ),
        })),

      clearCart: () => set({ items: [] }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      setCartOpen: (open) => set({ isOpen: open }),

      totalItems: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),

      totalPrice: () =>
        get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
    }),
    { name: "campus-drip-cart" }
  )
);

interface FilterState {
  category: string | null;
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  sortBy: "newest" | "price-asc" | "price-desc" | "popularity";
  setCategory: (category: string | null) => void;
  toggleSize: (size: string) => void;
  toggleColor: (color: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setSortBy: (sort: FilterState["sortBy"]) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  category: null,
  sizes: [],
  colors: [],
  priceRange: [0, 500],
  sortBy: "newest",

  setCategory: (category) => set({ category }),
  toggleSize: (size) =>
    set((state) => ({
      sizes: state.sizes.includes(size)
        ? state.sizes.filter((s) => s !== size)
        : [...state.sizes, size],
    })),
  toggleColor: (color) =>
    set((state) => ({
      colors: state.colors.includes(color)
        ? state.colors.filter((c) => c !== color)
        : [...state.colors, color],
    })),
  setPriceRange: (priceRange) => set({ priceRange }),
  setSortBy: (sortBy) => set({ sortBy }),
  resetFilters: () =>
    set({
      category: null,
      sizes: [],
      colors: [],
      priceRange: [0, 500],
      sortBy: "newest",
    }),
}));

interface ProductViewerState {
  selectedColorId: string | null;
  selectedSize: string | null;
  quantity: number;
  setSelectedColor: (colorId: string) => void;
  setSelectedSize: (size: string | null) => void;
  setQuantity: (quantity: number) => void;
  reset: () => void;
}

export const useProductViewerStore = create<ProductViewerState>((set) => ({
  selectedColorId: null,
  selectedSize: null,
  quantity: 1,
  setSelectedColor: (colorId) =>
    set({ selectedColorId: colorId, selectedSize: null }),
  setSelectedSize: (size) => set({ selectedSize: size }),
  setQuantity: (quantity) => set({ quantity: Math.max(1, quantity) }),
  reset: () =>
    set({ selectedColorId: null, selectedSize: null, quantity: 1 }),
}));
