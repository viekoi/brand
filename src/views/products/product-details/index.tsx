import { useEffect, useState } from "react";
import styles from "./productDetails.module.scss";

import Helmet from "../../../components/helmet/Helmet";
import Loader from "../../../components/loader/Loader";
import ProductList from "../../../components/list/ProductList";

import { IProduct } from "../../../common/modal";
import { products as productsData } from "../../../utils/static/product";

import { useParams } from "react-router-dom";
import ProductDetailsCard from "./components/ProductDetailsCard";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productFromData: IProduct | undefined = productsData.find(
      (item) => item.id === id,
    );
    setIsLoading(false);
    setProduct(productFromData);
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) return <Loader />;

  if (!product) return <>oops this url does not match out data</>;

  return (
    <Helmet title={product.name}>
      <div className={styles.content}>
        <ProductDetailsCard key={product.id} product={product} />
        <ProductList products={productsData} />
      </div>
    </Helmet>
  );
};

export default ProductDetails;
