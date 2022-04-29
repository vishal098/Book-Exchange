import React from "react";
import { Redirect, Route, Routes } from "react-router-dom";
import Login from "../Component/Login";
import SignUp from "../Component/SignUp";
import App from "../App";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/home">
      <Redirect to="/home" />
    </Route>
    <Route exact path="/home">
      <App />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/signup">
      <SignUp />
    </Route>
  </Routes>
);

export default AppRoutes;
