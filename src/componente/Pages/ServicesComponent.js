import React from "react";

function ServicesComponent({ icon, title }) {
  return (
    <div className="col-md-6 ">
      <div className="d-flex ">
        <div className="icon mt-4">
          <i className={icon}></i>
        </div>
        <div className="text p-3">
          <h6>{title}</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Quisquam sit hic, neque qui blanditiis illo culpa rerum.</p>
          <p>
            <a href="#" className="text-decoration-none">
              Read More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
