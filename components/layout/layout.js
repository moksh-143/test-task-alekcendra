import { Fragment } from "react";
import MainHeader from "./main-header";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader>
        <main>{props.children}</main>
      </MainHeader>
    </Fragment>
  );
};

export default Layout;
