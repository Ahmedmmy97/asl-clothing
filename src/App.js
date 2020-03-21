import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentuser: null
    };
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentuser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      this.setState({currentuser: userAuth});
    });
  }

  render() {
    return (
      <div>
        <Header currentuser={this.state.currentuser} />
        <switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </switch>
      </div>
    );
  }
}

export default App;
