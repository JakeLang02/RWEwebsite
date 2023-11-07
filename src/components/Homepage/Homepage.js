// Homepage.js
import React from 'react';
import './Homepage.css';
import RWEPhoto1 from '../../images/RWEPhoto1.png';

// Homepage.js
const Homepage = () => {
    return (
      <div className="container mx-auto mt-28 p-5">
        <h2 className="text-6xl mb-4 text-slate-100">Who We Are</h2>
        <p className="text-2xl text-slate-50 leading-relaxed">
          Real World Engineering (RWE) is a unique student engineering
          organization at the University of Florida that operates like a design firm. We are
          funded and supported by the UF Department of Mechanical and Aerospace
          Engineering. We provide students with hands-on experience in engineering,
          allowing them to apply their academic knowledge to real-world problems and
          new technologies.
          We were founded in Summer 2022, and since then we have grown, learned, and
          solidified our purpose and goal. We have developed our first project, the Solar
          Drone Design Team, and have had tremendous success since.
        </p>
        <img src={RWEPhoto1} alt="Photo" className="h=200 w=400 mr-5 mx-auto mt-14" />

        
      </div>
      
    );
  }
  
  export default Homepage;
  