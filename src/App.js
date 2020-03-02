import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {
  unsubscribeAuthUser = null;

  componentDidMount() {
    this.unsubscribeAuthUser = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapShot => {
          this.props.setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeAuthUser();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps) (App);
