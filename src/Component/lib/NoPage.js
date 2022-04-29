import { Result } from "antd";
import React, { useState } from "react";
import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";

const NoPage = () => {
  const [display, setDisplay] = useState("none");

  const openSidenav = () => {
    setDisplay("block");
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ margin: 2, marginTop: "250px" }}>
          {display === "none" && <button onClick={openSidenav}>{">"}</button>}
          <SideNav
            name="Jonathan"
            display={display}
            closeNav={() => setDisplay("none")}
          />
        </div>
        <Result
          status="404"
          title="404"
          subTitle="Page Not Found."
          extra={
            <Button
              onClick={() => {
                window.open("/home", "_self");
              }}
              width={"max-content"}
              type="primary"
            >
              Back To Home
            </Button>
          }
          style={{ width: "100%" }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default NoPage;
