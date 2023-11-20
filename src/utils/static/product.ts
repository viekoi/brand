export const products = [
  {
    id: "1",
    mainCategoryId: "m2",
    subCategoryId: "m2s1",
    mainCategory: "Consumer electronics and gadgets",
    subCategory: "Iphones",
    name: "Iphone abc",
    imageUrl: "/assets/tech/1.jpg",
    price: 100,
    description: "High quality, made in Japan",
  },
  {
    id: "2",
    mainCategoryId: "m2",
    subCategoryId: "m2s2",
    mainCategory: "Consumer electronics and gadgets",
    subCategory: "Android tablets",
    name: "Tablet abc",
    imageUrl: "/assets/tech/2.jpg",
    price: 200,
    description: "High quality, made in Japan",
  },
  {
    id: "3",
    mainCategoryId: "m2",
    subCategoryId: "m2s3",
    mainCategory: "Consumer electronics and gadgets",
    subCategory: "Android phones",
    name: "Phone xyz",
    imageUrl: "/assets/tech/3.jpg",
    price: 50,
    description: "High quality, made in Japan",
  },
  {
    id: "4",
    mainCategoryId: "m2",
    subCategoryId: "m2s1",
    mainCategory: "Consumer electronics and gadgets",
    subCategory: "Iphones",
    name: "Iphone xyz",
    imageUrl: "/assets/tech/4.jpg",
    price: 10,
    description: "High quality, made in Japan",
  },
  {
    id: "5",
    mainCategoryId: "2",
    subCategoryId: "m2s5",
    mainCategory: "Consumer electronics and gadgets",
    subCategory: "Head phones",
    name: "Head phone 1",
    imageUrl: "/assets/tech/5.jpg",
    price: 10000,
    description: "High quality, made in Japan",
  },
  {
    id: "6",
    mainCategoryId: "m2",
    subCategoryId: "m2s6",
    mainCategory: "Consumer electronics and gadgets",
    subCategory: "Cameras",
    name: "Camera China",
    imageUrl: "/assets/tech/6.jpg",
    price: 699,
    description: "High quality, made in Japan",
  },
  {
    id: "7",
    mainCategoryId: "2",
    subCategoryId: "m2s7",
    mainCategory: "Consumer electronics and gadgets",
    subCategory: "Laptops",
    name: "Laptop 1",
    imageUrl: "/assets/tech/7.jpg",
    price: 420,
    description: "High quality, made in Japan",
  },
  {
    id: "8",
    mainCategoryId: "m2",
    subCategoryId: "m2s8",
    mainCategory: "Consumer electronics and gadgets",
    subCategory: "Smart watches",
    name: "Watch xyz",
    imageUrl: "/assets/tech/8.jpg",
    price: 500,
    description: "High quality, made in Japan",
  },
  {
    id: "9",
    mainCategoryId: "2",
    subCategoryId: "m2s5",
    mainCategory: "Consumer electronics and gadgets",
    subCategory: "Head phones",
    name: "Head phone 2",
    imageUrl: "/assets/tech/9.jpg",
    price: 123,
    description: "High quality, made in Japan",
  },
];

export const findProductsBySubCategoryId = (id: string) => {
  return products.filter((product) => product.subCategoryId === id);
};

export const findProductsByMaxPrice = (maxPrice: string) => {
  return products.filter((product) => product.price <= +maxPrice);
};

export const findProductsSearchTerms = (searchTerms: {
  name?: string;
  categoryId?: string;
  minPrice?: string;
  maxPrice?: string;
}) => {
  const { name, categoryId, maxPrice, minPrice } = searchTerms;
  if (name) {
    if (name === "all") return products;
    return products.filter((product) => {
      const lowercaseItem = product.name.toLowerCase();
      const lowercaseSearchText = name.toLowerCase();

      return lowercaseItem.match(lowercaseSearchText);
    });
  } else {
    return products.filter((product) => {
      return (
        (categoryId ? product.subCategoryId === categoryId : true) &&
        (minPrice ? product.price >= +minPrice : true) &&
        (maxPrice ? product.price <= +maxPrice : true)
      );
    });
  }
};
