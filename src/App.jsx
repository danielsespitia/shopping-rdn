import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, ShopPage } from './pages';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
