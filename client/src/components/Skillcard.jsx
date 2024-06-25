import './Skillcard.css'

function Skillcard({ title, description}) {
  return ( 
    <div className="skill-card">
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </div>
  );
}

export default Skillcard;