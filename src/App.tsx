import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './app.scss';
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import Product from "./components/Product";
import SingleProductsPage from "./pages/SingleProductsPage";


function App() {
  return (
    <div>
      <Switch>
        <Route path='/login'>
          <LoginPage/>
        </Route>
        <Route path='/endPoints'>
          <Product/>
        </Route>
        <Layout>
          <Switch>
            <Route path='/home'>
              <HomePage/>
            </Route>
            <Route exact path='/products'>
              <ProductsPage/>
            </Route>
            <Route exact path='/products/:id' children={<SingleProductsPage />} />
          </Switch>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;

