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
        <div className="skill">
          <h3 className="skill-title">Back-end Development</h3>
          <p className="skill-description">
            Skilled in Node.js and Express.js for server-side development. Familiar with database management using MongoDB.
          </p>
        </div>
        <div className="skill">
          <h3 className="skill-title">UI/UX Design</h3>
          <p className="skill-description">
            Knowledgeable in designing user-friendly interfaces using Adobe XD and Figma. Focus on usability and accessibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
