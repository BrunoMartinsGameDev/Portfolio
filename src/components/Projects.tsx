import {type Project} from './ProjectCard';  

export const projects: Project[] = [
  {
    title: 'Portfolio Moderno',
    image: '/project1.jpg',
    description: 'Site pessoal com design responsivo e tons neutros.',
    details: 'Este projeto foi desenvolvido com React e Vite, focando em UI/UX moderno e deploy no GitHub Pages.',
    repo: 'https://github.com/seuusuario/portfolio',
    link: 'https://seuusuario.github.io/portfolio/'
  },
  {
    title: 'Placeholder Indie Game',
    image: '/project2.jpg',
    description: 'Placeholder para jogo indie feito com Unity.',
    details: 'Placeholder para um jogo indie, desenvolvido com Unity e C#. O projeto inclui mecânicas básicas de jogo e gráficos simples.',
    repo: 'https://github.com/seuusuario/jogo-indie',
    link: 'https://seuusuario.itch.io/jogo-indie'
  },
  // Adicione mais projetos conforme necessário
];