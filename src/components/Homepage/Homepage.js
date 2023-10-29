// Homepage.js
import React from 'react';
import './Homepage.css';

// Homepage.js
const Homepage = () => {
    return (
      <div className="container mx-auto mt-36 p-5">
        <h2 className="text-5xl mb-4 text-indigo-600">Real World Engineering Club at UF</h2>
        <p className="text-gray-700 leading-relaxed">
          This is the official homepage of the Real World Engineering Club. Discover and explore the realm of real-world engineering applications and breakthroughs.
        </p>
        <button className="mt-5 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-blue-700 transition-colors">
          Join us now!
        </button>
      </div>
    );
  }
  
  export default Homepage;
  