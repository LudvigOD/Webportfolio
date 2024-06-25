import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { db } from "@/firebase"; // Ensure db is imported from your firebase configuration
import { collection, addDoc } from 'firebase/firestore';
import { useState } from "react";

function Contact() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = async (e) => {
    e.preventDefault()
    const tmpDate = Date.now()
    const _date = new Date(tmpDate).toISOString()

    try{
      const docRef = await addDoc(collection(db, 'contact_messeges'), {
        name, email, message, date: _date
      })

      console.log('Added doc.')

      setEmail('')
      setMessage('')
      setName('')
    }
    catch(err) {
      console.error('Error adding doc: ', err)
    }
  }


  return (
<section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-text">
          Feel free to reach out to me through this form or connect with me on GitHub and LinkedIn.
        </p>
        <form
          className="contact-form"
          action="mailto:ludvig.o.danielsson@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input value={name} type="text" name="name" placeholder="Your Name" onChange={e => setName(e.target.value)} required />
          <input value={email} type="email" name="email" placeholder="Your Email" required onChange={e => setEmail(e.target.value)}/>
          <textarea value={message} name="message" rows="4" placeholder="Your Message" required onChange={e => setMessage(e.target.value)}/>
          <button type="submit" onClick={submitMessage}>Send Message</button>
        </form>
        <div className="social-icons">
          <a href="https://github.com/your-github" target="_blank" aria-label="GitHub" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" aria-label="LinkedIn" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;