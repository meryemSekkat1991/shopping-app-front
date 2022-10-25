import React from 'react';
import {Route} from 'react-router-dom'
import './app.scss';
import HeroPage from "./pages/HeroPage";
import Layout from "./Layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div>
      <Layout>
        <Route path='/login'>
          <HeroPage/>
        </Route>
        <Route path='/'>
          <HomePage/>
        </Route>
        <Route path='/products'>
          <ProductsPage/>
        </Route>
      </Layout>
    </div>
  );
}

export default App;

