import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const { pathname } = useLocation();

  const FooterLogic = () => {
    return <Fragment>{pathname === "/" && <Footer />}</Fragment>;
  };

  return (
    <Fragment>
      <MainNavigation />
      {/*避免遮蔽導覽列*/}
      <main className={""}>{props.children}</main>
      <FooterLogic />
    </Fragment>
  );
};

export default Layout;
