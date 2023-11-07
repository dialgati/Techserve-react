import React from "react";
import people from "../assets/people.jpg";
import barre from "../assets/barre.jpg";
import entrepreneur from "../assets/entrepreneur.jpg";
import cup from "../assets/cup.jpg";

function Milieu() {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <div className="position">
                <img src={people} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className=" bas">
              <div className="card bg-light shadow-5 border-0">
                <div className="card-body">
                  <h5 className="card-title text-start">Who we are</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque vel aliquid amet, cumque ex expedita consequatur, esse
                    praesentium necessitatibus blanditiis consectetur
                    cupiditate? Aut harum alias ex, molestiae dolore quae
                    quisquam!
                  </p>
                  <div className="text-end mt-5">
                    <a href="#" className="btn btn-primary change">
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className=" bas ">
              <div className="card bg-light shadow-5 border-0">
                <div className="card-body">
                  <h5 className="card-title text-start">Who we are</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque vel aliquid amet, cumque ex expedita consequatur, esse
                    praesentium necessitatibus blanditiis consectetur
                    cupiditate? Aut harum alias ex, molestiae dolore quae
                    quisquam!
                  </p>
                  <div className="text-end">
                    <a href="#" className="btn btn-primary change">
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="position">
              <img src={barre} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="position">
              <img src={entrepreneur} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className=" bas">
              <div className="card bg-light  shadow-5 border-0">
                <div className="card-body">
                  <h5 className="card-title text-start">Who we are</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque vel aliquid amet, cumque ex expedita consequatur, esse
                    praesentium necessitatibus blanditiis consectetur
                    cupiditate? Aut harum alias ex, molestiae dolore quae
                    quisquam!
                  </p>
                  <div className="text-end">
                    <a href="#" className="btn btn-primary change">
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className=" bas ">
              <div className="card bg-light shadow-3 border-0">
                <div className="card-body">
                  <h5 className="card-title text-start">Who we are</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque vel aliquid amet, cumque ex expedita consequatur, esse
                    praesentium necessitatibus blanditiis consectetur
                    cupiditate? Aut harum alias ex, molestiae dolore quae
                    quisquam!
                  </p>
                  <div className="text-end">
                    <a href="#" className="btn btn-primary  change">
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="position">
              <img src={cup} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Milieu;
