export type ICategory = {
  id: string;
  imageUrl: string;
  name: string;
  subcategories: Omit<ICategory, "subcategories">[];
};

export type IProduct = {
  id: string;
  mainCategory: string;
  subCategory: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};
