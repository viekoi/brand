export const categories = [
  {
    id: "m1",
    name: "Home and outdoor",
    imageUrl: "/assets/category/category1.jpeg",
    subcategories: [
      {
        imageUrl: "/assets/interior/1.jpg",
        id: "m1s1",
        name: "Subcategory 1",
      },
      {
        imageUrl: "/assets/interior/2.jpg",
        id: "m1s2",
        name: "Subcategory 2",
      },
      {
        imageUrl: "/assets/interior/3.jpg",
        id: "m1s3",
        name: "Subcategory 3",
      },
      {
        imageUrl: "/assets/interior/4.jpg",
        id: "m1s4",
        name: "Subcategory 4",
      },
      {
        imageUrl: "/assets/interior/5.jpg",
        id: "m1s5",
        name: "Subcategory 5",
      },
      {
        imageUrl: "/assets/interior/6.jpg",
        id: "m1s6",
        name: "Subcategory 6",
      },
      {
        imageUrl: "/assets/interior/7.jpg",
        id: "m1s7",
        name: "Subcategory 7",
      },
      {
        imageUrl: "/assets/interior/8.jpg",
        id: "m1s8",
        name: "Subcategory 8",
      },
    ],
  },
  {
    id: "m2",
    name: "Consumer electronics and gadgets",
    imageUrl: "/assets/category/category2.png",
    subcategories: [
      {
        imageUrl: "/assets/tech/1.jpg",
        id: "m2s1",
        name: "Iphones",
      },
      {
        imageUrl: "/assets/tech/2.jpg",
        id: "m2s2",
        name: "Android tablets",
      },
      {
        imageUrl: "/assets/tech/3.jpg",
        id: "m2s3",
        name: "Android phones",
      },
      {
        imageUrl: "/assets/tech/4.jpg",
        id: "m2s4",
        name: "Subcategory 4",
      },
      {
        imageUrl: "/assets/tech/5.jpg",
        id: "m2s5",
        name: "Head phones",
      },
      {
        imageUrl: "/assets/tech/6.jpg",
        id: "m2s6",
        name: "Cameras",
      },
      {
        imageUrl: "/assets/tech/7.jpg",
        id: "m2s7",
        name: "Laptops",
      },
      {
        imageUrl: "/assets/tech/8.jpg",
        id: "m2s8",
        name: "Smart watches",
      },
    ],
  },
];

export const findSubCategory = (id: string) => {
  // Iterate over each object in the array
  for (const obj of categories) {
    // Use Array.prototype.find() to find the item object within each object's items array
    const item = obj.subcategories.find((item) => item.id === id);
    if (item) {
      // Return the item if found
      return item;
    }
  }

  // Item was not found
  return null;
};
