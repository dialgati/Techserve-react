import React from "react";
import ServicesComponent from "./ServicesComponent";

function Services (){
    return(
        <div className="container" id="Services">
          <div className="row">
            <div className="contenu text-center my-4">
              <h6>Our Services</h6>
              <p>Nullam auguae arcu pellentique non liberosit amet. Mattis pulvinar tellus</p>
              <p>Etiam varius sit amet velit no eletfend.</p>
            </div>
            <div className="icons-services d-flex flex-wrap">
              <ServicesComponent 
                icon={'bi fs-1 text-primary bi-cash-coin'}
              />
              <ServicesComponent 
                icon={'bi fs-1 text-primary bi-credit-card'}
              />
              <ServicesComponent 
                icon={'bi fs-1 text-primary bi-signpost-split'}
              />
              <ServicesComponent 
                icon={'bi fs-1 text-primary bi-inboxes'}
              />              
              <ServicesComponent 
                icon={'bi fs-1 text-primary bi-patch-exclamation'}
              />
              <ServicesComponent 
                icon={'bi fs-1 text-primary bi-gender-trans'}
              />
            </div>
          </div>
        </div>
    )
}
export default Services;