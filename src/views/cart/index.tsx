import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

import styles from "./CartView.module.scss";
import Helmet from "../../components/helmet/Helmet";
import CartTable from "./components/CartTable";

import CheckOut from "./components/CheckOut";

const CartView = () => {
  const totalCartItems = useSelector(
    (state: RootState) => state.cartItems.totalCartItems,
  );
  const cartProducts = useSelector((state: RootState) => state.cartItems.items);

  return (
    <Helmet title="Cart">
      <div className={styles.content}>
        <h3 className={styles.header}>My cart {totalCartItems}</h3>
        <div className={styles[`cart-content`]}>
          <CartTable products={cartProducts} />
          <CheckOut />
        </div>
      </div>
    </Helmet>
  );
};

export default CartView;
