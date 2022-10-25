import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.scss';
import HeroPage from "./pages/HeroPage";
import {Navbar} from "react-daisyui";
import Layout from "./Layout/Layout";
import FooterComponent from "./components/FooterComponent";
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
          <div>lolo</div>
        </Route>
        <Route path='/products'>
          <ProductsPage/>
        </Route>
      </Layout>
    </div>
  );
}

export default App;

