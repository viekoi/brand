import { IProduct } from "../../common/modal";
import styles from "./ProductList.module.scss";
import ProductCard from "../cards/ProductCard";

const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <div className={styles.list}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
