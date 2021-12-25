import * as React from "react";
// import { Helmet } from "react-helmet";
import Nav from "./Nav";

const Layout: React.FC<{ title?: string }> = (props) => {
  React.useEffect(() => {
    document.title = props.title || "My todos";
  }, [props.title]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* <Helmet>
        <title>{props.title || "My todos"}</title>
      </Helmet> */}
      <Nav />
      {props.children}
    </div>
  );
};

export default Layout;
