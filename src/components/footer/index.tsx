import Container from "../container";
import styles from "./Footer.module.scss";
import Logo from "../base/logo";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    label: "About",
    labelUrl: "#",
    subLabels: [
      {
        label: "About Us",
        labelUrl: "*",
      },
      {
        label: "Find store",
        labelUrl: "*",
      },
      {
        label: "Categories",
        labelUrl: "*",
      },
      {
        label: "BLogs",
        labelUrl: "*",
      },
    ],
  },
  {
    label: "Partnership",
    labelUrl: "#",
    subLabels: [
      {
        label: "About Us",
        labelUrl: "*",
      },
      {
        label: "Find store",
        labelUrl: "*",
      },
      {
        label: "Categories",
        labelUrl: "*",
      },
      {
        label: "BLogs",
        labelUrl: "*",
      },
    ],
  },
  {
    label: "Information",
    labelUrl: "#",
    subLabels: [
      {
        label: "Help Center",
        labelUrl: "*",
      },
      {
        label: "Money Refund",
        labelUrl: "*",
      },
      {
        label: "Shipping",
        labelUrl: "*",
      },
      {
        label: "Contact us",
        labelUrl: "*",
      },
    ],
  },
  {
    label: "For users",
    labelUrl: "#",
    subLabels: [
      {
        label: "Login",
        labelUrl: "*",
      },
      {
        label: "Register",
        labelUrl: "*",
      },
      {
        label: "Settings",
        labelUrl: "*",
      },
      {
        label: "My Orders",
        labelUrl: "*",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Logo />
            <span className={styles[`brand-description`]}>
              Best information about the company gies here but now lorem ipsum
              is
            </span>
          </div>
          {footerLinks.map((main, index) => {
            return (
              <div className={styles[`link-wrapper`]} key={index}>
                <Link to={main.labelUrl} className={styles[`main-link`]}>
                  {main.label}
                </Link>
                <div className={styles[`sub-links`]}>
                  {main.subLabels.map((sub, index) => {
                    return (
                      <Link
                        key={index}
                        className={styles[`sub-link`]}
                        to={sub.labelUrl}
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className={styles[`link-wrapper`]}>
            <Link to={`*`} className={styles[`main-link`]}>
              Get app
            </Link>
            <div className={styles[`sub-links`]}>
              <Link className={styles[`sub-link`]} to={"*"}>
                <img src="/icons/AppStore.svg" alt="app-store" />
              </Link>

              <Link className={styles[`sub-link`]} to={"*"}>
                <img src="/icons/PlayStore.svg" alt="app-store" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
