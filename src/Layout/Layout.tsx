import React from 'react';
import NavBar from "../components/NavBar";
import FooterComponent from "../components/FooterComponent";

// @ts-ignore
const Layout =({children}) =>{
  return(
    <>
      <div>
       <NavBar/>
      </div>
      <main className="h-screen">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
      <FooterComponent/>
    </>
  )
}

export default Layout;
