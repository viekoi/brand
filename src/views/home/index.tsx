import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import CategoryBanner from "./components/CategoryBanner";
import Helmet from "../../components/helmet/Helmet";

import { categories as categoriesData } from "../../utils/static/category";
import { products as productsData } from "../../utils/static/product";

import { ICategory, IProduct } from "../../common/modal";
import ProductList from "../../components/list/ProductList";
const HomeView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setCategories(categoriesData);
    setProducts(productsData);
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>loading</p>;

  return (
    <Helmet title="Home">
      <div className={styles.home}>
        <div className={styles.category}>
          {categories.map((cate) => {
            return <CategoryBanner key={cate.id} category={cate} />;
          })}
        </div>

        <ProductList products={products} />
      </div>
    </Helmet>
  );
};

export default HomeView;
