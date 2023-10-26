import React from 'react';
import './About.css'
import MichaelHeadShot from '../../images/MichaelSHeadshot1.JPG'

const About = () => {
  return (
    <div className="about-us-container">
        <p className="intro-paragraph">
            Your introductory paragraph here...
        </p>
        <div className="photo-grid">
            {[...Array(4)].map((_, rowIndex) => (
                <div className="photo-row" key={rowIndex}>
                    {[...Array(3)].map((_, colIndex) => (
                        <div className="photo" key={colIndex}>
                            <img src={MichaelHeadShot} alt={`Description ${rowIndex * 3 + colIndex}`} />
                        </div>
                    ))}
                </div>
            ))}
            <div className="photo-row bottom-row">
                {[...Array(2)].map((_, index) => (
                    <div className="photo" key={index}>
                        <img src={MichaelHeadShot} alt={`Description 12${index}`} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}

export default About;
