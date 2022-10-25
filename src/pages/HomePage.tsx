import React  from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="">
      <div className="hero min-h-screen" style={{backgroundImage: "url(https://i.ibb.co/Xt5cbJX/istockphoto-1337300784-170667a.jpg)"}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link className="btn btn-accent" to="/login">Let Go Shopping</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
