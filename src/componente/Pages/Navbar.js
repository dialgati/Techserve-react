import React from "react";
function NavBar() {
  return (
    <div className="container-fluid">
         <nav className="navbar navbar-expand-lg">
         <div className="container">
           <a className="navbar-brand text-white" href="#"><i class="bi bi-boxes text-light"></i>Techserve</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <a className="nav-link text-light" href="">Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link text-light" href="#">About US</a>
               </li>
                <li className="nav-item">
                 <a className="nav-link text-light" href="#">Services</a>
               </li>
                <li className="nav-item">
                 <a className="nav-link text-light" href="#">News</a>
               </li>
                <li className="nav-item">
                 <a className="nav-link text-light" href="#">Contacts</a>
               </li>
                <li className="nav-item">
                 <a className="nav-link text-light" href="#">Sign In</a>
               </li>
             </ul>
             <form className="d-flex ms-4">

             <button type="button" className="btn btn-outline svt text-white border rounded-pill">TRY IT FREE</button>
             </form>
           </div>
         </div>
       </nav>
    </div>
  );
}

export default NavBar;

