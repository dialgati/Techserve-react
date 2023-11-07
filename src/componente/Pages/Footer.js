import React from 'react'

function Footer() {
  return (
    <div className='container py-5'>
       <div className="row">
          <div className="col-md-6">
             <div className="text">
             <a className="navbar-brand " href="#"><i class="bi bi-boxes "></i>Techserve</a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum, et modi velit sunt illo. Ad, excepturi amet!</p>
             </div>
          </div>
          <div className="col-md-6">
              <div className="autre ">
              <div className="d-flex  justify-content-end">
             <ul className="d-flex flex-wrap list-unstyled">
               <li className="nav-item mx-3">
                 <a className="nav-link" href="">Home</a>
               </li>
               <li className="nav-item ms-3">
                 <a className="nav-link" href="#">About US</a>
               </li>
                <li className="nav-item ms-3">
                 <a className="nav-link" href="#">Services</a>
               </li>
                <li className="nav-item ms-3">
                 <a className="nav-link" href="#">News</a>
               </li>
                <li className="nav-item ms-3">
                 <a className="nav-link" href="#">Contacts</a>
               </li>
                <li className="nav-item ms-3">
                 <a className="nav-link" href="#">Sign In</a>
               </li>
             </ul>
           </div>
                 <div className="icon d-flex justify-content-end">
                    <i className="bi bi-facebook me-3  fs-4 text-secondary"></i>
                    <i className="bi bi-twitter me-3 fs-4 text-secondary"></i>
                    <i className="bi bi-linkedin fs-4 text-secondary"></i>
                 </div>
                   <div className="text d-flex justify-content-end mt-4">
                        <p className=''> Copyright, All Rights Reserved, 2017</p>
                   </div>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Footer;