import { Outlet } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import Container from "../../container";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <div className={styles.content}>
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
