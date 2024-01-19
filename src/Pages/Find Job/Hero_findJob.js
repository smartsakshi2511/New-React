import React from "react";

const Hero_findJob = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      style={{ objectFit: "contain ! important" }} >
      <div className="carousel-inner" id="carousel">
       
        <div className="carousel-caption" style={{ zIndex: "10" }}>
        <h1 style={{margin:"100px" , fontWeight:"bold"}}> Find Job</h1>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Skills, Designations, Companies"
              aria-label="Search"/>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Provinces"
              aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">
               Search
            </button>
          </form>
        </div>
        <div className="carousel-item active">
          <img
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ filter: "brightness(20%)" }}
            alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src=" "
            style={{ filter: "brightness(30%)" }}
            alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ filter: "brightness(30%)" }}
            alt="Third slide"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero_findJob;
