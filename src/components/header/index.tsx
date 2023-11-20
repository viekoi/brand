import styles from "./Header.module.scss";
import Logo from "../base/logo";
import Container from "../container";
import SearchBar from "./search-bar/SearchBar";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
const Header = () => {
  const totalItems = useSelector(
    (state: RootState) => state.cartItems.totalCartItems,
  );
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles[`content`]}>
          <div className={styles.headerLogo}>
            <Logo />
          </div>
          <SearchBar />
          <div className={styles.actions}>
            <div className={styles[`action-button`]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 11.5C6.6625 11.5 0 13.175 0 16.5V17.75C0 18.4375 0.5625 19 1.25 19H18.75C19.4375 19 20 18.4375 20 17.75V16.5C20 13.175 13.3375 11.5 10 11.5Z"
                  fill="#8B96A5"
                />
              </svg>
              <span className={styles[`label`]}>Login</span>
            </div>

            <Link to={`/cart`}>
              <div className={`${styles[`action-button`]}`}>
                <div className={styles[`total-item`]}>{totalItems}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.29989 16.7997C5.14491 16.7997 4.21043 17.7447 4.21043 18.8997C4.21043 20.0546 5.14491 20.9996 6.29989 20.9996C7.45487 20.9996 8.39985 20.0546 8.39985 18.8997C8.39985 17.7447 7.45487 16.7997 6.29989 16.7997ZM0 1.04998C0 1.62747 0.472492 2.09996 1.04998 2.09996H2.09996L5.8799 10.0693L4.46242 12.6313C3.69593 14.0383 4.70392 15.7497 6.29989 15.7497H17.8497C18.4272 15.7497 18.8997 15.2772 18.8997 14.6997C18.8997 14.1223 18.4272 13.6498 17.8497 13.6498H6.29989L7.45487 11.5498H15.2772C16.0647 11.5498 16.7577 11.1193 17.1147 10.4683L20.8736 3.65394C21.2621 2.96095 20.7581 2.09996 19.9601 2.09996H4.42042L3.71693 0.598489C3.54894 0.230996 3.17094 0 2.77195 0H1.04998C0.472492 0 0 0.472492 0 1.04998ZM16.7997 16.7997C15.6447 16.7997 14.7102 17.7447 14.7102 18.8997C14.7102 20.0546 15.6447 20.9996 16.7997 20.9996C17.9547 20.9996 18.8997 20.0546 18.8997 18.8997C18.8997 17.7447 17.9547 16.7997 16.7997 16.7997Z"
                    fill="#8B96A5"
                  />
                </svg>
                <span className={styles[`label`]}>Cart</span>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
