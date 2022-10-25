import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './app.scss';
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div>
      <Switch>
        <Route path='/login'>
          <LoginPage/>
        </Route>
        <Layout>
          <Switch>
            <Route path='/home'>
              <HomePage/>
            </Route>
            <Route path='/products'>
              <ProductsPage/>
            </Route>
            <Route path='/test'>
              <ProductsPage/>
            </Route>
          </Switch>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;

