import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className={styles[`icon-wrapper`]}>
      <div className={styles[`bag-icon`]}>
        <svg
          className={styles.bg}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="42"
          viewBox="0 0 40 42"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.13046 0.913086H32.0435C36.0055 0.913086 39.2174 4.28555 39.2174 8.44569V33.5544C39.2174 37.7145 36.0055 41.087 32.0435 41.087H8.13046C4.16841 41.087 0.956542 37.7145 0.956543 33.5544L0.956543 8.44569C0.956543 4.28555 4.16841 0.913086 8.13046 0.913086Z"
            fill="#0D6EFD"
          />
        </svg>
        <svg
          className={styles.shadow}
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="42"
          viewBox="0 0 38 42"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.125 0H30.875C34.81 4.42542e-07 38 3.52576 38 7.875V34.125C38 38.4742 34.81 42 30.875 42H7.125C3.18997 42 -6.00593e-07 38.4742 2.00198e-07 34.125L0 7.875C-4.00395e-07 3.52576 3.18997 4.42542e-07 7.125 0Z"
            fill="#0D6EFD"
            fill-opacity="0.2"
          />
        </svg>

        <svg
          className={styles.bag}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
        >
          <g opacity="0.7">
            <path
              opacity="0.3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.29018 7.35632H3.30965C3.25911 7.35632 3.18417 7.42663 3.18127 7.47308L2.45892 19.1478L15.9548 19.1452L15.2253 7.47308C15.2225 7.4284 15.1457 7.35632 15.0969 7.35632H14.1164V9.32157C14.1164 9.86425 13.6765 10.3042 13.1338 10.3042C12.5911 10.3042 12.1512 9.86425 12.1512 9.32157V7.35632L6.25543 7.35632V9.32157C6.25543 9.86425 5.81549 10.3042 5.27281 10.3042C4.73012 10.3042 4.29018 9.86425 4.29018 9.32157V7.35632Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.20329 0.478271C11.9153 0.478271 14.1164 2.6796 14.1164 5.38906L15.0969 5.39138C16.1835 5.39138 17.1192 6.27035 17.1867 7.35079L17.9244 19.1539C17.9921 20.2361 17.1698 21.1133 16.0865 21.1133H2.3201C1.23739 21.1133 0.41462 20.2344 0.482148 19.1539L1.21984 7.35079C1.28748 6.26864 2.22128 5.39138 3.30964 5.39138H4.29017C4.29017 2.67813 6.49304 0.478271 9.20329 0.478271ZM12.1511 5.39149C12.1511 3.76503 10.8299 2.44362 9.20328 2.44362C7.57781 2.44362 6.25541 3.76421 6.25541 5.38917L12.1511 5.39149ZM4.29018 7.35657H3.30965C3.2591 7.35657 3.18417 7.42687 3.18126 7.47332L2.45892 19.148L15.9548 19.1455L15.2253 7.47332C15.2225 7.42864 15.1457 7.35657 15.0969 7.35657H14.1164V9.32181C14.1164 9.8645 13.6765 10.3044 13.1338 10.3044C12.5911 10.3044 12.1512 9.8645 12.1512 9.32181V7.35657L6.25542 7.35657L6.25542 9.32181C6.25542 9.8645 5.81549 10.3044 5.2728 10.3044C4.73011 10.3044 4.29018 9.8645 4.29018 9.32181V7.35657Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="22"
          viewBox="0 0 78 22"
          fill="none"
        >
          <path
            d="M0.213623 20.8061H9.10297C13.7762 20.8061 16.2652 18.3679 16.2652 15.056C16.2652 11.9778 14.0607 10.1186 11.6936 10.0069V9.80368C13.8575 9.31603 15.4525 7.78199 15.4525 5.33361C15.4525 2.21472 13.1362 0 8.54421 0H0.213623V20.8061ZM4.61258 17.2098V11.6831H8.30039C10.4135 11.6831 11.7241 12.9022 11.7241 14.6192C11.7241 16.1837 10.6573 17.2098 8.19879 17.2098H4.61258ZM4.61258 8.70648V3.55574H7.95497C9.90555 3.55574 11.0129 4.5615 11.0129 6.06507C11.0129 7.71087 9.67188 8.70648 7.8737 8.70648H4.61258Z"
            fill="#8CB7F5"
          />
          <path
            d="M18.5182 20.8061H22.846V11.9778C22.846 10.0577 24.248 8.73696 26.1579 8.73696C26.7573 8.73696 27.5802 8.83855 27.9866 8.97062V5.13042C27.6005 5.03899 27.0621 4.97803 26.6253 4.97803C24.8779 4.97803 23.4454 5.99396 22.8765 7.92422H22.7139V5.20154H18.5182V20.8061Z"
            fill="#8CB7F5"
          />
          <path
            d="M33.6988 21.1008C36.0049 21.1008 37.4983 20.095 38.2603 18.6422H38.3822V20.8061H42.4865V10.2812C42.4865 6.56288 39.3371 4.99835 35.8627 4.99835C32.1241 4.99835 29.6655 6.78638 29.0661 9.63097L33.0689 9.95607C33.3635 8.91982 34.288 8.15788 35.8424 8.15788C37.3155 8.15788 38.1587 8.8995 38.1587 10.1796V10.2405C38.1587 11.2463 37.092 11.3784 34.3794 11.6425C31.291 11.927 28.5175 12.9632 28.5175 16.4478C28.5175 19.5362 30.7221 21.1008 33.6988 21.1008ZM34.9382 18.1139C33.6073 18.1139 32.6524 17.4942 32.6524 16.3056C32.6524 15.0865 33.6581 14.4871 35.182 14.2737C36.1268 14.1417 37.671 13.9182 38.1891 13.5728V15.2287C38.1891 16.8644 36.838 18.1139 34.9382 18.1139Z"
            fill="#8CB7F5"
          />
          <path
            d="M49.6438 11.7847C49.654 9.7732 50.8528 8.59473 52.6002 8.59473C54.3374 8.59473 55.3838 9.73256 55.3736 11.6425V20.8061H59.7015V10.8704C59.7015 7.23339 57.568 4.99835 54.3171 4.99835C52.0008 4.99835 50.3245 6.13619 49.6235 7.95469H49.4406V5.20154H45.316V20.8061H49.6438V11.7847Z"
            fill="#8CB7F5"
          />
          <path
            d="M68.3344 21.0601C70.8539 21.0601 72.1645 19.6074 72.7639 18.307H72.9467V20.8061H77.2136V0H72.8959V7.82262H72.7639C72.1848 6.55272 70.9352 4.99835 68.3243 4.99835C64.9006 4.99835 62.0052 7.66008 62.0052 13.0242C62.0052 18.246 64.7787 21.0601 68.3344 21.0601ZM69.7059 17.6161C67.5826 17.6161 66.4245 15.7265 66.4245 13.0038C66.4245 10.3015 67.5623 8.44234 69.7059 8.44234C71.8089 8.44234 72.9874 10.2202 72.9874 13.0038C72.9874 15.7875 71.7886 17.6161 69.7059 17.6161Z"
            fill="#8CB7F5"
          />
        </svg>
      </div>
    </Link>
  );
};

export default Logo;