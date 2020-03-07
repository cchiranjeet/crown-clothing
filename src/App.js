import React from "react";
import "./App.css";
import { Switch, Route,Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignupPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import {setCurrentUser} from './redux/user/user.action'
// import userReducer from "./redux/user/user.reducer";

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
          <Route path="/sign-in" render={()=> this.props.currentUser?(<Redirect to='/'/>):(<SigninAndSignupPage/>)}  />
        </Switch>
      </div>
    );
  }
}
const matoStateToProps =({user})=>({
  currentUser:user.currentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})
export default connect(matoStateToProps, mapDispatchToProps) (App);
