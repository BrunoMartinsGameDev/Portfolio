import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectModal.css';
import type { Project } from './ProjectCard';

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.details}</p>
      <div className="modal-links">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Projeto
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Repositório
          </a>
        )}
      </div>
      <button className="close-btn" onClick={onClose}>Fechar</button>
    </div>
  </div>
);

export default ProjectModal;
