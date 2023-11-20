import { useState } from "react";
import styles from "./ProductDetailsCard.module.scss";

import { useDispatch } from "react-redux";
import { addItems } from "../../../../store/slices/cartItemsSlice";

import { IProduct } from "../../../../common/modal";
import CustomButton from "../../../../components/base/button/CustomButton";
import toast from "react-hot-toast";

const ProductDetailsCard = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<string>("1");
  console.log(count);

  const onAddItems = () => {
    if (
      isNaN(parseInt(count)) ||
      parseInt(count) < 1 ||
      parseFloat(count) % 1 !== 0
    ) {
      toast.error("please enter an integer greater than 1 or equal to 1");
      setCount("1");
      return;
    }
    toast.success("new items have been added");
    return dispatch(addItems({ ...product, amount: parseInt(count) }));
  };

  return (
    <div className={styles[`details-card`]}>
      <div className={styles.content}>
        <div className={styles[`image-wrapper`]}>
          <div
            className={styles[`product-image`]}
            style={{
              backgroundImage: `url(${product.imageUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
            }}
          />
        </div>

        <div className={styles[`details-wrapper`]}>
          <div className={styles[`top-section`]}>
            <h4>{product.name}</h4>
          </div>
          <div className={styles[`bottom-section`]}>
            <div className={styles.action}>
              <div
                className={`${styles[`total-price`]} ${styles[`action-item`]}`}
              >
                <div className="">
                  <h5 className="">${product.price}</h5>
                  <span>50-100 pcs</span>
                </div>
              </div>
              <div
                className={`${styles[`amount-select`]} ${
                  styles[`action-item`]
                }`}
              >
                <div
                  className={styles[`amount-button`]}
                  onClick={() => {
                    setCount((prev) => {
                      if (isNaN(parseInt(count)) || parseInt(count) <= 1) {
                        return prev;
                      }

                      return (parseInt(prev) - 1).toString();
                    });
                  }}
                >
                  -
                </div>
                <input
                  className={styles[`total-amount`]}
                  type={"text"}
                  value={count}
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                />
                <div
                  className={styles[`amount-button`]}
                  onClick={() => {
                    setCount((prev) => {
                      if (isNaN(parseInt(count)) || parseInt(count) < 1) {
                        return prev;
                      }

                      return (parseInt(prev) + 1).toString();
                    });
                  }}
                >
                  +
                </div>
              </div>
              <div className={` ${styles[`action-item`]}`}>
                <CustomButton onClick={onAddItems} outline={false}>
                  Send inquiry
                </CustomButton>
              </div>
            </div>

            <table>
              <tbody className={styles.table}>
                <tr className={styles[`table-row`]}>
                  <td className={styles[`label`]}>Price:</td>
                  <td className={styles[`value`]}>${product.price}</td>
                </tr>
                <tr className={styles[`seperator`]}></tr>
                <tr className={styles[`table-row`]}>
                  <td className={styles[`label`]}>Type: </td>
                  <td className={styles[`value`]}>Classic shoes</td>
                </tr>
                <tr className={styles[`table-row`]}>
                  <td className={styles[`label`]}>Material: </td>
                  <td className={styles[`value`]}>Plastic material</td>
                </tr>
                <tr className={styles[`table-row`]}>
                  <td className={styles[`label`]}>Design: </td>
                  <td className={styles[`value`]}>Modern nice</td>
                </tr>
                <tr className={styles[`seperator`]}></tr>
                <tr className={styles[`table-row`]}>
                  <td className={styles[`label`]}>Customization: </td>
                  <td className={styles[`value`]}>
                    Customized logo and design custom packages
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
