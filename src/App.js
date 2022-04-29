import React from "react";
import "./App.css";
import Header from "./Component/lib/Header";
import Footer from "./Component/lib/Footer";
import IndexPage from "./Component/IndexPage/IndexPage";

const App = () => (
  <>
    <Header />
    <body style={{ minHeight: "64.5vh" }}>
      <div className="container">
        <div style={{ display: "grid",gridRow:3 }}>
          <IndexPage/>
        </div>
      </div>
    </body>
    <Footer />
  </>
);

export default App;
