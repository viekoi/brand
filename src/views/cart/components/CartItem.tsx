import { useState, useEffect } from "react";
import useDebounce from "../../../utils/hooks/useDebounce";
import styles from "./CartTable.module.scss";
import { useDispatch } from "react-redux";
import { IProduct } from "../../../common/modal";
import { removeItems, addItems } from "../../../store/slices/cartItemsSlice";
import CustomButton from "../../../components/base/button/CustomButton";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CardTableItem = ({
  product,
}: {
  product: IProduct & { amount: number };
}) => {
  const navigate = useNavigate();
  const [count, setCount] = useState<string>(product.amount.toString());
  const [isUpdatable, setIsUpdatable] = useState(true);
  const countDebounce = useDebounce(count, 500);

  const dispatch = useDispatch();

  const onAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    setIsUpdatable(false);
    const newValue = e.currentTarget.value;
    if (
      isNaN(parseInt(newValue)) ||
      parseInt(newValue) < 1 ||
      parseFloat(newValue) % 1 !== 0
    ) {
      setCount(newValue);
      setIsUpdatable(false);
      return;
    }
    setIsUpdatable(true);
    setCount(newValue);
  };

  const updatePrice = () => {
    if (!isUpdatable) return;
    if (parseInt(count) === product.amount) return;
    const changeAmount = Math.abs(parseInt(count) - product.amount);

    if (parseInt(count) > product.amount) {
      return dispatch(addItems({ ...product, amount: changeAmount }));
    } else {
      return dispatch(removeItems({ ...product, amount: changeAmount }));
    }
  };

  useEffect(() => {
    updatePrice();
  }, [countDebounce]);

  return (
    <div className={styles.item}>
      <div className={styles[`top-section`]}>
        <div className={styles[`left-section`]}>
          <div
            className={styles[`image-wrapper`]}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <div
              className={styles[`product-image`]}
              style={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div className={styles[`info-wrapper`]}>
            <span
              className={styles[`product-name`]}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              {product.name}
            </span>
            <div className="">
              <div className={styles[`product-description`]}>
                {" "}
                Size: medium, Color: blue, Material: Plastic{" "}
              </div>
              <div className={styles[`product-description`]}>
                ${product.price}
              </div>
            </div>
          </div>
        </div>
        <div className={styles[`right-section`]}>
          <input
            value={count}
            type="text"
            onChange={onAmountChange}
            onBlur={() => {
              if (!isUpdatable) setCount(product.amount.toString());
            }}
            className={styles[`amount-select`]}
          />

          <CustomButton
            onClick={() => dispatch(removeItems(product))}
            width="fit-content"
            outline={false}
            backgroundColor="#fff"
            textColor="#fa3434"
            padding="0"
          >
            <Trash2 />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CardTableItem;
