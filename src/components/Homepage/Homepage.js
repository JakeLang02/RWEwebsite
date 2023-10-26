// Homepage.js
import React from 'react';
import './Homepage.css';

// Homepage.js
const Homepage = () => {
    return (
      <div className="container mx-auto mt-10 p-5">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Welcome to RWE Club</h2>
        <p className="text-gray-700 leading-relaxed">
          This is the official homepage of the Real World Engineering Club. Discover and explore the realm of real-world engineering applications and breakthroughs.
        </p>
        <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Join us now!
        </button>
      </div>
    );
  }
  
  export default Homepage;
  