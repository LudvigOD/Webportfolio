import React from 'react';
import './SkillsSection.css'; // Import your CSS file for styling

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h2 className="section-title" id="skills">My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h3 className="skill-title">Front-end Development</h3>
          <p className="skill-description">
            Proficient in HTML, CSS, and JavaScript. Experienced with React.js for building interactive user interfaces.
          </p>
        </div>
        {/* <div className="skill">
          <h3 className="skill-title">Back-end Development</h3>
          <p className="skill-description">
            Skilled in Node.js and Express.js for server-side development. Familiar with database management using MongoDB.
          </p>
        </div> */}
        <div className="skill">
          <h3 className="skill-title">Network Programming</h3>
          <p className="skill-description">
            Proficient in developing and managing networked applications using various protocols such as TCP/IP and HTTP. 
            Experience in socket programming and creating data structures for storing data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
