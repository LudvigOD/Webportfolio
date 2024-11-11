import './Fonts.css'
import './App.css';
import bannerImage from '/banner3.jpg'; // Import your image
import Bubble from './components/Bubble/Bubble'
import SkillsSection from "./components/SkillsSection/SkillsSection";
import Skillcard from "./components/Skillcard";
import ProgrammingLanguages from "./components/ProgrammingLangs/ProgrammingLangs";
import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import Proj from "./components/Proj/Proj";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Conctact/Contact";
import LoginDropdown from "./components/LoginDropdown/LoginDropdown.jsx";




function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    setName('');
    const _name = 'Ludvig!';
    let index = 0;
    const intervalId = setInterval(() => {
      setName(prevName => {
        if (index < _name.length) {
          const nextName = prevName + _name[index];
          index++;
          return nextName;
        } else {
          clearInterval(intervalId);
          return prevName;
        }
      });
    }, 300); // Adjust typing speed as needed (milliseconds)

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);





  return (
    <div id="main">
      <div id="banner-container">
        <img id="banner-img" src={bannerImage} alt="banner" />
        <div className="banner-overlay"></div>
        {/* <LoginDropdown /> */}
        <div className="banner-text">
          <h1>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('My name is <span class="highlight-word">Ludvig</span>!')
                  .start();
              }}
            />
          </h1>
          <h2>I am a student in Computer Science Engineering</h2>
          <h2>
            At The <span className="highlight-word">Faculty of Engineering</span>, LTH.
          </h2>
        </div>
        <div className="bubble-frame">
          <Bubble name="SKILLS" icon="🚀" pos="bubble1" id="skill-container" />
          <Bubble name="PROJECTS" icon="🚧" pos="bubble2" id="proj" />
          <Bubble name="CONTACT" icon="🌐" pos="bubble3" id="contact" />
          <Bubble name="ABOUT ME" icon="🧑‍💻" pos="bubble4" id="about-me" />
        </div>
      </div>

      <div id="skill-container">
        <div className="skills-section">
          <h2 className="section-title">My Skills</h2>
          {/* <div className="skills-grid">
            <Skillcard
              title="Frontend Development"
              description="Creating responsive and user-friendly interfaces using HTML, CSS, JavaScript and the framework react."
            />
            <Skillcard
              title="Backend Development"
              description="Building server-side applications using Node.js, Express, and databases like MongoDB."
            />
            <Skillcard
              title="UI/UX Design"
              description="Designing intuitive user interfaces and enhancing user experience through wireframing and prototyping."
            />
            <Skillcard
              title="Mobile Development"
              description="Developing cross-platform mobile applications using React Native and Flutter."
            />
            <Skillcard
              title="Database Management"
              description="Designing and optimizing databases using SQL and NoSQL technologies."
            />
            <Skillcard
              title="Cloud Computing"
              description="Deploying and managing applications on cloud platforms like AWS and Azure."
            />
          </div> */}
          <ProgrammingLanguages />
        </div>
      </div>
      <Proj />
      {/* about me */}
      <AboutMe />
      {/* contact */}
      <Contact />
    </div>

  );
}

export default App;