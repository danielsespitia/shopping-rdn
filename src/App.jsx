import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, Hats } from './pages';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Switch>
          <Route exact path="/hats" component={Hats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
