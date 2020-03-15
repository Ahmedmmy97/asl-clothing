import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";


function App() {
  return (
    <div>
    <Header/>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop"  component={ShopPage} />
        <Route  path="/signin" component={SignInAndSignUpPage}/>
      </switch>
    </div>
  );
}

export default App;
