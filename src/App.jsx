// Packages
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import { HomePage, ShopPage, AccessPage } from './pages';
import { Header } from './components';
// Styles
import './App.css';

// TODO: Implementar pruebas con router, a forms, desbaratar styling de FormInput component para entender transición

function App() {
  const options = [
    { name: 'shop', id: 1 },
    { name: 'contact', id: 2 },
    { name: 'sign-in', id: 3 },
  ];
  return (
    <div>
      <Router>
        <Header options={options} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={AccessPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
