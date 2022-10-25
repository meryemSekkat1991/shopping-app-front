import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './app.scss';
import HeroPage from "./pages/HeroPage";
import {Navbar} from "react-daisyui";


function App() {
  return (
    <div className="">
      <HeroPage></HeroPage>
    </div>
  );
}

export default App;

