import styles from "./ProductCard.module.scss";
import Card from "react-bootstrap/Card";
import { IProduct } from "../../common/modal";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <Card className={styles.card}>
        <div className={styles[`image-wrapper`]}>
          <Card.Img variant="top" src={product.imageUrl} />
        </div>
        <Card.Body className={styles[`card-body`]}>
          <Card.Title className={styles[`card-name`]}>
            ${product.price}
          </Card.Title>
          <Card.Text className={styles[`card-description`]}>
            {product.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;
