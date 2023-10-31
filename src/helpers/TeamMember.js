import React from 'react'

function TeamMember ({image, name}){
  return (
    <div className="TeamMember">
      <div style={{backgroundImage: 'url(' + image + ')'}}></div>
      <h1>{name}</h1>
    </div>
  );
}

export default TeamMember;