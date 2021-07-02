// Packages
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import { HomePage, ShopPage } from './pages';
import { Header } from './components';
// Styles
import './App.css';

function App() {
  const options = ['shop', 'contact'];
  return (
    <div>
      <Router>
        <Header options={options} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
