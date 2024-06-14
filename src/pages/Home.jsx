import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../context/authContext";


import Services from "../components/services/Services";
import Hero3 from "../components/hero2/Hero3";
import Hero01 from "../components/hero2/Hero01";
import Aboutus from "../components/aboutus/Aboutus";


const Home = () => {
  // const { user } = useContext(AuthContext);

  return (
    <div>
      <Hero01 />
      <Aboutus/>
      <Hero3 />
      <Services />
    </div>
  );
};

export default Home;
