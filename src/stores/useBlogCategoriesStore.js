import { create } from "zustand";
const categories = [
  { id: 0, name: "All", isActive: true },
  { id: 1, name: "Consultant", isActive: false },
  { id: 2, name: "Estate", isActive: false },
];
const useBlogCategoriesStore = create((set) => ({
  categories: categories,
  categoryActive: (categoryId) =>
    set((prev) => ({
      categories: prev.categories.map((category) =>
        category.id === categoryId
          ? { ...category, isActive: true }
          : { ...category, isActive: false }
      ),
    })),
}));
export default useBlogCategoriesStore;
