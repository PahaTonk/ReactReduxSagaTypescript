import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { AboutUsPage } from './pages/AboutUsPage';
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutUsPage} path="/redux" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
