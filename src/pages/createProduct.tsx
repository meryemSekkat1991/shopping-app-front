import React  from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

const handleSubmit = (event: { preventDefault: () => void; }) => {
  event.preventDefault();

  axios.post(`http://localhost:8081/api/products`, {
    name: "Vest",
    sku: "9jtp0",
    description: "Vest for winter",
    price: null,
    unit_price: null,
    image_url: "https://i.ibb.co/Xt5cbJX/istockphoto-1337300784-170667a.jpg"
  })
    .then(res => {
    })

  setTimeout(() => {
    console.log("submit")
  }, 3000)
}

const CreateProduct = () => {
  return (
    <main className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full">
          <div className="card shadow-2xl bg-base-100 w-full">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <fieldset>
                </fieldset>
                <fieldset className="form-control">
                  <label className="label">
                    <span className="label-text">name</span>
                  </label>
                  <input type="text" placeholder="name" className="input input-bordered"/>
                </fieldset>
                <fieldset className="form-control">
                  <label className="label">
                    <span className="label-text"> sku</span>
                  </label>
                  <input type="text" placeholder=" sku" className="input input-bordered"/>
                </fieldset>
                <fieldset className="form-control">
                  <label className="label">
                    <span className="label-text"> description</span>
                  </label>
                  <textarea placeholder="description" className="textarea textarea-bordered"/>
                </fieldset>
                <fieldset className="form-control">
                  <label className="label">
                    <span className="label-text"> price</span>
                  </label>
                  <input type="text" placeholder=" price" className="input input-bordered"/>
                </fieldset>
                <fieldset className="form-control">
                  <label className="label">
                    <span className="label-text"> unit_price</span>
                  </label>
                  <input type="text" placeholder="unit_price" className="input input-bordered"/>
                </fieldset>
                <fieldset className="form-control">
                  <label className="label">
                    <span className="label-text">image_url</span>
                  </label>
                  <input type="file" placeholder="image_url" className="input input-bordered"/>
                </fieldset>
                <div className="form-control mt-8">
                  <button type="submit"  className="btn btn-accent">Create Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CreateProduct
