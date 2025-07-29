import { useState } from 'react';
import { FaUser, FaFolderOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

interface NavbarProps {
  onSectionChange: (section: 'about' | 'projects' | 'contact') => void;
}

const Navbar = ({ onSectionChange }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (section: 'about' | 'projects' | 'contact') => {
    onSectionChange(section);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar fixed-navbar">
      <div className="navbar-content">
        <span className="navbar-logo">Bruno Martins de Abreu - Dev FullStack & Game Dev Unity</span>
        <ul className="navbar-list desktop">
          <li onClick={() => handleMenuClick('about')}><FaUser /> Sobre mim</li>
          <li onClick={() => handleMenuClick('projects')}><FaFolderOpen /> Projetos</li>
          <li onClick={() => handleMenuClick('contact')}><FaEnvelope /> Contato</li>
        </ul>
        <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`navbar-list mobile ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => handleMenuClick('about')}><FaUser /> Sobre mim</li>
        <li onClick={() => handleMenuClick('projects')}><FaFolderOpen /> Projetos</li>
        <li onClick={() => handleMenuClick('contact')}><FaEnvelope /> Contato</li>
      </ul>
    </nav>
  );
};

export default Navbar;
