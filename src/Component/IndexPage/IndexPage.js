import React, { useState } from "react";
import BookCard from "../BookCard";
import SideNav from "../lib/SideNav";

const IndexPage = () => {
  const [display, setDisplay] = useState("none");
  const openSidenav = () => {
    setDisplay("block");
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: 2, marginTop: "250px" }}>
        {display === "none" && <button onClick={openSidenav}>{">"}</button>}
        <SideNav
          name="Jonathan"
          display={display}
          closeNav={() => setDisplay("none")}
        />
      </div>
      <div style={{ margin: 24, marginLeft: "12px" }}>
        <BookCard />
      </div>
    </div>
  );
};

export default IndexPage;
