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
      <main>
        <div className="py-20 container mx-auto">
          {children}
        </div>
      </main>
      <FooterComponent/>
    </>
  )
}

export default Layout;
