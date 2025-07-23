import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <ul>
      <li><FaEnvelope /> brunomartins616@hotmail.com</li>
      <li><FaPhone /> +55 (48) 99912-5147</li>
      <li><FaLinkedin /> <a href="https://www.linkedin.com/in/brunomartinsgamedev" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><FaGithub /> <a href="https://github.com/BrunoMartinsGameDev" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><FaInstagram /> <a href="https://www.instagram.com/brunooomartinss" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      <li><img src="/itchio.svg" alt="itch.io" style={{width:20}} /> <a href="https://bruneca.itch.io" target="_blank" rel="noopener noreferrer">itch.io</a></li>
    </ul>
  </footer>
);

export default Footer;
