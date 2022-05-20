import React, { useState, useEffect } from "react";

//https://fakestoreapi.com/products

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => { 
      const updatedList = data.filter((x)=>x.category === cat);
      setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothes</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothes</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewellery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
        </div>
        {filter.map((Product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={Product.id}>
                  <img
                    class="card-img-top"
                    src={Product.image}
                    alt={Product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {Product.title.substring(0, 12)}
                    </h5>
                    <p class="card-text lead fw-bold">${Product.price}</p>
                    <a href="#" class="btn btn-outline-dark">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display=6 fw-border text-center">Category</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
