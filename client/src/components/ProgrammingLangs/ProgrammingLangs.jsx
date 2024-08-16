import './ProgrammingLangs.css'; // Import the CSS file for styling

const ProgrammingLanguages = () => {
  const languages = ['Java', 'JavaScript', 'Python', 'C/C++'];

  return (
    <div className="languages-section">
      <h2 className="section-title">Programming Languages</h2>
      <ul className="languages-list">
        {languages.map((language, index) => (
          <li key={index} className="language-item">{language}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgrammingLanguages;