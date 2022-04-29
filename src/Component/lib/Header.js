import React, { useState } from "react";
import { Image, Modal } from "antd";
import Button from "./Button";
import logo from "../../assest/logo.png";
import Authentication from "../Authentication";
import { withRouter } from "../Utills/function";

const Header = ({ router }) => {
  const { location } = router;
  const isLogin = location.pathname.includes("login");

  const [authentication, setAuthentication] = useState(isLogin);

  return (
    <>
      <header className="header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            margin: "0px 8px",
            color: "#ffffff",
          }}
        >
          <div
            className={"menucontainer"}
            onClick={() => window.open("http://localhost:3000/", "_self")}
          >
            <Image preview={false} width={"40%"} src={logo} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              style={{
                marginRight: "10px",
                background: "#ffffff",
                color: "#000000",
                cursor: "pointer",
              }}
              onClick={() => setAuthentication(true)}
            >
              <div to="login">Login</div>
            </Button>
            <div style={{ color: "#f8f8f8" }}>
              <i className="fas fa-user" style={{ coluor: "blue" }}></i>
            </div>
          </div>
        </div>
      </header>
      <Modal
        visible={authentication}
        onCancel={() => setAuthentication(false)}
        width={600}
        footer={null}
        closable={false}
      >
        <div>
          <Authentication />
        </div>
      </Modal>
    </>
  );
};

export default withRouter(Header);
