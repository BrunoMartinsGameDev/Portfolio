import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectCard, { type Project } from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import './App.css';
import { projects } from './components/Projects'; // Assuming you have a JSON file with project data



function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Função para scroll suave até a seção
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: '#23272a', minHeight: '100vh', width: '100%' }}>
      <Navbar onSectionChange={scrollToSection} />
      <div style={{ paddingTop: 72, maxWidth: 1200, margin: '0 auto' }}>
        <section id="about" style={{ marginBottom: 48 }}>
          <AboutMe />
        </section>
          <h2 style={{ textAlign: 'center' }}>Projetos</h2>
        <section id="projects" style={{ marginBottom: 48, padding: '40px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

export default App;
