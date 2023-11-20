import styles from "./CartTable.module.scss";
import { useDispatch } from "react-redux";
import { resetCart } from "../../../store/slices/cartItemsSlice";
import { IProduct } from "../../../common/modal";
import { Link } from "react-router-dom";

import CustomButton from "../../../components/base/button/CustomButton";
import CardTableItem from "./CartItem";

const CartTable = ({
  products,
}: {
  products: (IProduct & { amount: number })[];
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles[`cart-table`]}>
      <div className="">
        {products.map((product) => {
          return <CardTableItem product={product} key={product.id} />;
        })}
      </div>

      <div className={styles[`table-actions`]}>
        <Link to={`/`}>
          <CustomButton width="160px" height="40px" outline={false}>
            Back to shop
          </CustomButton>
        </Link>

        <CustomButton
          onClick={() => dispatch(resetCart())}
          width="160px"
          height="40px"
          outline
          backgroundColor={`#fff`}
          textColor={`#0D6EFD`}
        >
          Remove all
        </CustomButton>
      </div>
    </div>
  );
};

export default CartTable;
