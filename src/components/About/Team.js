import React from 'react';
import { ExecList } from '../../helpers/ExecList';
import { SDList } from '../../helpers/SDList';
import { BusinessList } from '../../helpers/BusinessList';
import TeamMember from '../../helpers/TeamMember';
import './Team.css';
import groupPhoto from '../../images/RWETeam.JPG';

const Team = () => {
    const renderTeamList = (list, title) => (
        <>
            <h1 className="TeamTitle mx-auto mt-28">{title}</h1>
            <div className="TeamList">
                {list.map((teamMember, key) => (
                    <TeamMember
                        key={key}
                        image={teamMember.image}
                        name={teamMember.name}
                    />
                ))}
            </div>
        </>
    );

    
    return (
      <div className="OuterContainer mx-auto mt-4">
          <div className="TeamHeader">
              <img src={groupPhoto} alt="Team Group Photo" className="TeamHeaderImage" />
              <div className="TeamHeaderContent">
                  <h1>Our Team</h1>
              </div>
          </div>
          <div className="Team">
              {renderTeamList(ExecList, 'Executive Board')}
              {renderTeamList(SDList, 'Solar Drone Team')}
              {renderTeamList(BusinessList, 'Business Board')}
          </div>
      </div>
  );
};
export default Team;
