import React from "react";
import './App.css'
import Services from "./componente/Pages/Services";
import Header from "./componente/Pages/Header";
import Milieu from "./componente/Pages/Milieu";
import Clients from "./componente/Pages/Clients";
import Signup from "./componente/Pages/Signup";
import Footer from "./componente/Pages/Footer";

function App() {
  return (
    <div className="">
       <Header />
       <Services />
       <Milieu />
       <Clients />
       <Signup />
       <Footer />
    </div>
  );
}

export default App;
  

