const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
const projetos = [
  {
    titulo: 'Aprenda Scrum!',
    descricao: 'A plataforma oferece uma abordagem prática sobre os processos do Scrum, abrangendo papéis, artefatos, eventos e fluxos de trabalho. Com conteúdos bem estruturados e exemplos aplicáveis, o usuário é conduzido por uma jornada de aprendizado que facilita a assimilação dos conceitos e apoia a implementação no ambiente corporativo.',
    imagem: '/img/api-semestre1.png',
    github: 'https://github.com/raphaelamonteiro/API-SEMESTRE1',
    video: 'https://www.youtube.com/watch?v=7vTisQebZxs',
    tecnologias: ['HTML', 'CSS','Python','Flask', 'MySQL','AWS','...']
  },
    {
    titulo: 'MindDoc Analyzer ',
    descricao: 'O software utiliza modelos de visão e linguagem (VLMs) para automatizar a extração e organização de informações clínicas, como diagnósticos, tratamentos e evolução dos pacientes. Isso otimiza o tempo das equipes médicas, reduz erros e garante maior precisão na gestão hospitalar, melhorando o cuidado e a eficiência dos serviços prestados.',
    imagem: '/img/site-pessoal.png',
      github: 'https://github.com/raphaelamonteiro/API-SEMESTRE2',
      video: 'https://youtu.be/yDJxmulN8Cw?si=kNkxcch8HvXW2fSl',
    tecnologias: ['Java', 'Figma', 'CSS', 'Ollama', 'MySQL', '...']
  },
  {
    titulo: 'AdaTrade',
    descricao: 'Plataforma web desenvolvida para organizar e visualizar dados do comércio exterior brasileiro, permitindo o acompanhamento do desempenho dos estados. Com base em dados abertos do Ministério do Desenvolvimento, Indústria, Comércio e Serviços, oferece uma interface interativa para análise, estudo de mercado e decisões estratégicas.',
    imagem: '/img/todo-app.png',
    github: 'https://github.com/equipeAdalove/API-SEMESTRE3',
    video: 'https://github.com/equipeAdalove/API-SEMESTRE3',
    tecnologias: ['HTML', 'CSS', 'ReactJs', 'NestJs','Python','Colab', '...']
  }
];


  // Aqui ele envia os dados pra view
  res.render('index', { projetos });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
