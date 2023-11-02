import React from 'react';
import { ExecList } from '../../helpers/ExecList';
import { SDList } from '../../helpers/SDList';
import { BusinessList } from '../../helpers/BusinessList';
import TeamMember from '../../helpers/TeamMember';
import './Team.css';

const Team = () => {
    const renderTeamList = (list, title) => (
        <>
            <h1 className="TeamTitle">{title}</h1>
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
        <div className="Team">
            {renderTeamList(ExecList, 'Executive Board')}
            {renderTeamList(SDList, 'Solar Drone Team')}
            {renderTeamList(BusinessList, 'Business Board')}
        </div>
    );
};

export default Team;
