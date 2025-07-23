import './AboutMe.css';

const AboutMe = () => (
  <section className="about-me">
    <div className="about-img">
      <img src="FotoBruno.png" alt="Minha foto" />
    </div>
    <div className="about-info">
      <h2>Sobre mim</h2>
      <p>Olá! Meu nome é Bruno Martins e sou apaixonado por tecnologia, design e soluções criativas. Tenho experiência desenvolvendo aplicações web e móveis, integrando front‑end e back‑end com foco em performance e experiência do usuário. Trabalho com React, React Native, JavaScript, TypeScript, HTML, CSS e Django REST Framework, criando interfaces modernas e funcionais. Também atuo no desenvolvimento de jogos, utilizando Unity e C# para criar experiências interativas e envolventes. Sou movido por aprendizado contínuo: gosto de ensinar, documentar processos e ajudar outras pessoas a entenderem conceitos técnicos. Além disso, valorizo muito a organização e a experiência de quem vai usar o que eu construo — seja um aplicativo, um sistema web ou um protótipo de portfólio como este.
      </p>

      <p>Seja bem-vindo(a) ao meu espaço!</p>
      <ul>
        <li>Habilidades: React, React-Native, TypeScript, Node.js, Django, DRF, Unity, C#, JavaScript, HTML, CSS, Git, Github, Postgres, MongoDB</li>
        <li>Interesses: Jogos, Desenvolvimento, Design, Gestão, Educação</li>
        <li>Educação:
          <br/>
          - Graduado em Jogos Digitais - Uniasselvi (2022)
          <br/>
          - Graduado em Análise e Desenvolvimento de Sistemas - Senac Palhoça (2025)
          <br/>
          - Pós Graduado em Gestão em Tecnologia - Unisselvi (2023)
          <br/>
          - Pós Graduado em Gestão de para o Microempresário - Unisselvi (2023)
        </li>
        <li>Experiência:
          <br/>
          - Desenvolvedor Java  na Ilha Service Informática (02/2024 - 06/2024)
          <br/>
          - Professor de Jogos Digitais no Senac Palhoça (08/2022 - até o momento)
          <br/>
          - Professor de Desenvolvimento no Senai Palhoça (11/2024 - até o momento)
        </li>
      </ul>
    </div>
  </section>
);

export default AboutMe;
