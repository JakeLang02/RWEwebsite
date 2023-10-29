import React from 'react'
import './Team.css'
import MichaelHeadShot from '../../images/RWE_Headshots/MichaelSHeadshot1.JPG'

const Team = () => {
  return (
    <div className="about-us-container mx-auto mt-36 p-5"  >
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

export default Team;
