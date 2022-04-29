import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div style={{width:'auto'}}>
      <div>{isLogin ? <Login /> : <SignUp />}</div>
      {isLogin ? (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            margin: "10px 0px",
          }}
        >
          Don't have an account yet? &nbsp;{" "}
          <div
            style={{ paddingTop: 0, cursor: "pointer", color: "#2A5CB2" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            Sign Up
          </div>
        </div>
      ) : (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            margin: "10px 0px",
          }}
        >
          Already have an account ? &nbsp;{" "}
          <div
            onClick={() => setIsLogin(!isLogin)}
            style={{ paddingTop: 0, cursor: "pointer", color: "#2A5CB2" }}
          >
            Log In
          </div>
        </div>
      )}
    </div>
  );
};

export default Authentication;
