import React from 'react';
import './tarjetas/acercade.css';

const acercade = ({ members }) => {
  return (
    <div className="team-container-card">
      {members.map((member, index) => (
        <div className="card2" key={index}>
          <div className="name">{member.name}</div>
        </div>
      ))}
    </div>
  );
};

export default acercade;
