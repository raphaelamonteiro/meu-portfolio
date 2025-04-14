const express = require('express');
const app = express();
const path = require('path');

// Configurações iniciais
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
const projetos = [
  {
    id: "api1",
    titulo: 'Aprenda Scrum!',
    descricao: 'Plataforma web que oferece uma abordagem prática sobre os processos do Scrum, abrangendo papéis, artefatos, eventos e fluxos de trabalho. Com conteúdos bem estruturados e exemplos aplicáveis, o usuário é conduzido por uma jornada de aprendizado que facilita a assimilação dos conceitos e apoia a implementação no ambiente corporativo.',
    imagem: '/images/Projeto1.png',
    github: 'https://github.com/raphaelamonteiro/API-SEMESTRE1',
    video: 'https://www.youtube.com/watch?v=7vTisQebZxs',
    tecnologias: ['HTML', 'CSS', 'Bootstrap', 'Python', 'Flask', 'MySQL', 'AWS', '...'],
    descricaoDetalhada: `
    <p><b>Aprenda Scrum</b> é um sistema web que tem como objetivo <b>descomplicar a compreensão e aplicação da metodologia ágil Scrum.</b>
    <br>
    A plataforma oferece uma abordagem prática e acessível para aprender sobre os processos do Scrum, desde os papéis e artefatos até os eventos e fluxos de trabalho.
    <br>
    Com conteúdo detalhado e exemplos práticos, o usuário é guiado por uma <b>jornada de aprendizado que facilita a assimilação dos conceitos e prepara para a implementação no ambiente corporativo.</b>
    A plataforma vai além do simples estudo de conceitos, proporcionando uma verdadeira imersão no funcionamento do Scrum, ajudando o usuário a visualizar como os conceitos se funcionam na prática.
</p>
    <br>
    <p>O sistema permite que os usuários:</p>
    <ul>
      <li>Visualizem horários disponíveis</li>
      <li>Agendem com profissionais específicos</li>
      <li>Recebam confirmação por e-mail</li>
    </ul>
    <br>
    <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
  <iframe 
    src="https://www.youtube.com/embed/7vTisQebZxs"
    title="Demonstração do Projeto"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
  </iframe>
</div>

    <br>
    <p>Este projeto foi feito com <strong>Node.js, Express, EJS</strong> e usa <strong>MongoDB</strong> como banco de dados.</p>
  `
  },
    {
    titulo: 'MindDoc Analyzer ',
    descricao: 'O software utiliza modelos de visão e linguagem (VLMs) para automatizar a extração e organização de informações clínicas, como diagnósticos, tratamentos e evolução dos pacientes. Isso otimiza o tempo das equipes médicas, reduz erros e garante maior precisão na gestão hospitalar, melhorando o cuidado e a eficiência dos serviços prestados.',
    imagem: '/images/Projeto2.png',
      github: 'https://github.com/raphaelamonteiro/API-SEMESTRE2',
      video: 'https://youtu.be/yDJxmulN8Cw?si=kNkxcch8HvXW2fSl',
    tecnologias: ['Java','JavaFX', 'CSS', 'Figma',  'Ollama', 'MySQL','JUnit','Apache Maven', '...']
  },
  {
    titulo: 'AdaTrade',
    descricao: 'Plataforma web desenvolvida para organizar e visualizar dados do comércio exterior brasileiro, permitindo o acompanhamento do desempenho dos estados. Com base em dados abertos do Ministério do Desenvolvimento, Indústria, Comércio e Serviços, oferece uma interface interativa para análise, estudo de mercado e decisões estratégicas.',
    imagem: '/images/Projeto3.png',
    github: 'https://github.com/equipeAdalove/API-SEMESTRE3',
    video: 'https://github.com/equipeAdalove/API-SEMESTRE3',
    tecnologias: ['HTML', 'CSS','TypeScript', 'ReactJs','NodeJs', 'NestJs','Python','Google Colab','PostgreSQL', '...']
  }
];
  
  const certificados = [
  {
    id: "poo",
    titulo: 'INTRODUÇÃO À PROGRAMAÇÃO ORIENTADA A OBJETOS (POO)',
    descricao: 'Plataforma web que oferece uma abordagem prática sobre os processos do Scrum, abrangendo papéis, artefatos, eventos e fluxos de trabalho. Com conteúdos bem estruturados e exemplos aplicáveis, o usuário é conduzido por uma jornada de aprendizado que facilita a assimilação dos conceitos e apoia a implementação no ambiente corporativo.',
    imagem: '/images/Projeto1.png',
    video: 'https://www.youtube.com/watch?v=7vTisQebZxs',
    tecnologias: ['HTML', 'CSS', 'Bootstrap', 'Python', 'Flask', 'MySQL', 'AWS', '...'],
    descricaoDetalhada: `
     <figure class="image is-4by3 mb-4">
      <img src="/images/agenda-preview.png" alt="Preview do sistema de agenda">
    </figure>
  `
  },
    {
    titulo: 'MindDoc Analyzer ',
    descricao: 'O software utiliza modelos de visão e linguagem (VLMs) para automatizar a extração e organização de informações clínicas, como diagnósticos, tratamentos e evolução dos pacientes. Isso otimiza o tempo das equipes médicas, reduz erros e garante maior precisão na gestão hospitalar, melhorando o cuidado e a eficiência dos serviços prestados.',
    imagem: '/images/Projeto2.png',
      github: 'https://github.com/raphaelamonteiro/API-SEMESTRE2',
      video: 'https://youtu.be/yDJxmulN8Cw?si=kNkxcch8HvXW2fSl',
    tecnologias: ['Java','JavaFX', 'CSS', 'Figma',  'Ollama', 'MySQL','JUnit','Apache Maven', '...']
  }
];


  // Aqui ele envia os dados pra view
  res.render('index', { projetos });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

