import React from 'react'
import { ExecList } from '../../helpers/ExecList'
import { SDList } from '../../helpers/SDList'
import { BusinessList } from '../../helpers/BusinessList'
import TeamMember from '../../helpers/TeamMember'
import './Team.css'

const Team = () => {
    return (
      <div className="Team mx-auto mt-36">
        
        <h1 class = "text-5xl mb-4 text-indigo-600">Executive Board</h1>
        <div className="TeamList">
          {ExecList.map((teamMember, key) => {
            return (
              <TeamMember
                key={key}
                image={teamMember.image}
                name={teamMember.name}
              />
            );
          })}
        </div>

        <h1 class = "text-5xl mb-4 text-indigo-600">Solar Drone Team</h1>
        <div className="TeamList">
          {SDList.map((teamMember, key) => {
            return (
              <TeamMember
                key={key}
                image={teamMember.image}
                name={teamMember.name}
              />
            );
          })}
        </div>

        <h1 class = "text-5xl mb-4 text-indigo-600">Business Board</h1>
        <div className="TeamList">
          {BusinessList.map((teamMember, key) => {
            return (
              <TeamMember
                key={key}
                image={teamMember.image}
                name={teamMember.name}
              />
            );
          })}
        </div>
        
      </div>
    );
  }

export default Team;
