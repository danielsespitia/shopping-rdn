// Packages
import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// Utils
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// Actions
import { setCurrentUser } from './redux/user/user.actions';
// Components
import { HomePage, ShopPage, AccessPage, CheckoutPage } from './pages';
import { ConnectedHeader } from './components';
import { ConnectedCollectionContainer } from './containers';
// Selectors
import { selectCurrentUser } from './redux/user/user.selectors';
// Styles
import './App.css';

// TODO: Implementar pruebas con router, a forms, desbaratar styling de FormInput component para entender transición
// TODO: Implementar pruebas de iniciar sesión
// TODO: Implementar pruebas de redux
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const options = [
      { name: 'shop', id: 1 },
      { name: 'contact', id: 2 },
    ];

    return (
      <div>
        <Router>
          <ConnectedHeader options={options} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route
              path={`/shop/:collectionId/`}
              component={ConnectedCollectionContainer}
            />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/sign-in"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <AccessPage />
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
