import styles from "./CheckOut.module.scss";
import CustomButton from "../../../components/base/button/CustomButton";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
const CheckOut = () => {
  const totalCartPrice = useSelector(
    (state: RootState) => state.cartItems.totalCartPrice,
  );
  return (
    <div className={styles.checkout}>
      <table>
        <tbody className={styles.table}>
          <tr className={styles[`table-row`]}>
            <td className={styles[`label`]}>Subtotal:</td>
            <td className={styles[`value`]}>${totalCartPrice}</td>
          </tr>
          <tr className={styles[`table-row`]}>
            <td className={styles[`label`]}>Discount:</td>
            <td className={`${styles[`value`]} ${styles.discountValue}`}>
              - $00.00
            </td>
          </tr>
          <tr className={styles[`table-row`]}>
            <td className={styles[`label`]}>Tax:</td>
            <td className={`${styles[`value`]} ${styles.taxValue}`}>$00.00</td>
          </tr>
        </tbody>

        <tbody className={`${styles.table} ${styles.totalTable}`}>
          <tr className={styles[`seperator`]}></tr>
          <tr className={styles[`table-row`]}>
            <td className={`${styles[`label`]} ${styles.totalLabel}`}>Total</td>
            <td className={`${styles[`value`]} ${styles.totalValue}`}>
              ${totalCartPrice}
            </td>
          </tr>
        </tbody>
      </table>

      <CustomButton
        padding="0 20px"
        height="54px"
        outline={false}
        backgroundColor="#00B517"
      >
        Checkout
      </CustomButton>
    </div>
  );
};

export default CheckOut;
