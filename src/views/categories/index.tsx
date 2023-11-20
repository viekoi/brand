import { useEffect, useState } from "react";
import styles from "./CategoryView.module.scss";

import { useParams } from "react-router-dom";

import Helmet from "../../components/helmet/Helmet";
import { findSubCategory } from "../../utils/static/category";
import Loader from "../../components/loader/Loader";
import { IProduct } from "../../common/modal";
import { findProductsBySubCategoryId } from "../../utils/static/product";
import ProductList from "../../components/list/ProductList";

const CategoryView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [subCategory, setSubCategory] = useState<{
    imageUrl: string;
    id: string;
    name: string;
  } | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const { id } = useParams();
  const subCategoryFromData = findSubCategory(id!);
  const productsFromData = findProductsBySubCategoryId(id!);

  // const breadcrumbs = useReactRouterBreadcrumbs();
  // console.log(breadcrumbs)

  console.log(subCategory);
  console.log(productsFromData);

  useEffect(() => {
    setSubCategory(subCategoryFromData);
    setProducts(productsFromData);
    setIsLoading(false);
  }, [id]);

  if (isLoading) return <Loader />;

  if (!subCategory) return <>oops this url does not match out data</>;

  return (
    <Helmet title={`${subCategory.name}`}>
      <div className={styles.content}>
        <div className={styles.header}>{subCategory.name}</div>
        <ProductList products={products} />
      </div>
    </Helmet>
  );
};

export default CategoryView;
