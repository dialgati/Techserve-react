import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

function Clients() {
  return (
    <div className="container-fluid bg-light py-5 ">
         <div className="text-center">
            <h1>Clients Testimonials</h1>
         </div>
    <div className='container pt-5'>
       <div className="row">
          <div className="col-md-4">
          <div class="card border-0">
            <div className="compress">
               <img src={img1} class=" rd " alt="..."/>
            </div>
            <div class="card-body bg-light shadow-lg p-5 mb-5 text-center ">
             <h2 className='card-title'>Nicole Brown</h2>
             <h5 className="card-title">Good Box</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
            </div>
          </div>
          <div className="col-md-4">
              <div class="card border-0">
              <div className="compress">
               <img src={img2} class=" rd" alt="..."/>
             </div>
             <div class="card-body bg-light shadow-lg p-5 mb-5 text-center ">
             <h2 className='card-title'>Nicole Brown</h2>
             <h5 className="card-title">Good Box</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
              </div>
          </div>
          <div className="col-md-4">
          <div class="card border-0">
             <div className="compress">
               <img src={img3} class=" rd" alt="..."/>
             </div>
           <div class="card-body bg-light shadow-lg p-5 mb-5 text-center ">
             <h2 className='card-title'>Nicole Brown</h2>
             <h5 className="card-title">Good Box</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
            </div>
          </div>
       </div>
    </div>
    </div>
  )
}

export default Clients;