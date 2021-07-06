// Packages
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Utils
import { auth } from './firebase/firebase.utils';
// Components
import { HomePage, ShopPage, AccessPage } from './pages';
import { Header } from './components';
// Styles
import './App.css';

// TODO: Implementar pruebas con router, a forms, desbaratar styling de FormInput component para entender transición

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
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
          <Header options={options} currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/sign-in" component={AccessPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
