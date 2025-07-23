import './ProjectCard.css';

export type Project = {
  title: string;
  image: string;
  description: string;
  details: string;
  repo?: string;
  link?: string;
};

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <div className="project-card" onClick={onClick}>
    <img src={project.image} alt={project.title} />
    <h3>{project.title}</h3>
    <p>{project.description}</p>
  </div>
);

export default ProjectCard;
