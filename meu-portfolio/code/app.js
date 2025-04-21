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
      descricao: 'Plataforma web que simplifica o aprendizado do Scrum com conteúdo prático, testes interativos e exemplos reais, facilitando a aplicação dos conceitos no ambiente corporativo.',
      imagem: '/images/Projeto1.png',
      github: 'https://github.com/raphaelamonteiro/API-SEMESTRE1',
      video: 'https://www.youtube.com/watch?v=7vTisQebZxs',
      tecnologias: ['HTML', 'CSS', 'Bootstrap', 'Python', 'Flask', 'MySQL', 'AWS', '...'],
      descricaoDetalhada: `
    <p>
   <b>Aprenda Scrum</b> é uma plataforma interativa criada com o propósito de descomplicar o aprendizado e a aplicação da metodologia ágil Scrum, oferecendo uma abordagem prática e acessível tanto para iniciantes quanto para profissionais que buscam aprimorar suas habilidades.
   <br>
   Por meio de conteúdos detalhados, testes de conhecimento e exemplos aplicados, o Aprenda Scrum conduz o usuário em uma jornada de aprendizado clara e dinâmica, <b>facilitando a assimilação dos papéis, artefatos, eventos e fluxos de trabalho que estruturam o Scrum.</b>
   <br>
   O objetivo principal do projeto é <b>transformar o aprendizado de Scrum em uma experiência prática, imersiva e intuitiva, permitindo que o usuário visualize e compreenda como os conceitos são aplicados no ambiente corporativo.</b>
   Ao ir além da teoria, a plataforma proporciona uma verdadeira simulação do funcionamento do Scrum, tornando o processo de aprendizado mais eficiente e conectado com situações do cotidiano empresarial.
   <br>
   Com o Aprenda Scrum, é possível acelerar a curva de aprendizado, preparar equipes para implementar o framework de forma assertiva e reduzir as dificuldades comuns enfrentadas ao adotar a metodologia ágil.
</p>
<br>
    <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
<img src="images/AprendaScrum.gif">
</div>

<p>Nele, o usuário pode:</p>
<ul>
  <li>Explorar conceitos fundamentais do Scrum, como papéis, artefatos e eventos</li>
  <li>Realizar testes interativos para reforçar o aprendizado e medir o progresso</li>
  <li>Acompanhar exemplos práticos que simulam o uso do Scrum em cenários reais</li>
  <li>Visualizar fluxos de trabalho e entender como as etapas se conectam</li>
  <li>Aplicar o conhecimento adquirido em exercícios que refletem desafios do ambiente corporativo</li>
</ul>
  `
    },
    {
      titulo: 'MindDoc Analyzer ',
      descricao: 'Software que utiliza VLMs para extrair e organizar dados clínicos com precisão, otimizando a gestão hospitalar e apoiando decisões rápidas e seguras para as equipes médicas.',
      imagem: '/images/Projeto2.png',
      github: 'https://github.com/raphaelamonteiro/API-SEMESTRE2',
      video: 'https://youtu.be/yDJxmulN8Cw?si=kNkxcch8HvXW2fSl',
      tecnologias: ['Java', 'JavaFX', 'CSS', 'Figma', 'Ollama', 'MySQL', 'JUnit', 'Apache Maven', '...'],
      descricaoDetalhada: `
    <p>
   O <b>MindDoc Analyzer</b> é um software que utiliza modelos de visão de linguagem (VLMs) para automatizar a extração e organização de informações cruciais, dentro de um hospital, como diagnósticos, tratamentos e evolução do paciente, otimizando o tempo e garantindo a precisão das informações.
   <br>
  Ao estruturar dados de maneira clara e acessível, o MindDoc Analyzer permite que médicos, enfermeiros e outros profissionais da saúde visualizem rapidamente informações essenciais sobre o histórico e o estado atual dos pacientes, <b>facilitando a tomada de decisões clínicas e melhorando a qualidade do atendimento.</b>
  <br>
  O objetivo principal do projeto é <b>automatizar e simplificar a extração de dados relevantes de relatórios clínicos, proporcionando uma forma mais eficiente de acessar e analisar as informações dos pacientes.</b>
  Em um ambiente de hospital psiquiátrico, onde o tempo e a precisão são fundamentais, a plataforma organiza dados complexos de forma intuitiva, garantindo que os profissionais da saúde possam tomar decisões informadas rapidamente.
  <br>
  Com o MindDoc Analyzer, é possível otimizar o fluxo de trabalho no contexto hospitalar, reduzindo o risco de erros humanos e aumentando a eficiência na gestão dos pacientes.
  <br>
  </p>
    <br>
        <br>
    <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
  <img src="images/MindDoc.gif">
  </div>
    <p>Nele, o usuário pode:</p>
    <ul>
      <li>Ecolher o modelo de visão de linguagem ideal para a extração dos dados relevanstes</li>
      <li>Cadastrar relatórios clínicos no banco de dados, de forma simples e ágil</li>
      <li>Consultar, atualizar e deletar relatórios cadastrados</li>
      <li>Extrair as informações essenciais dos documentos, relacionadas aos pacientes</li>
      <li>Editar as informações extraídas dos relatórios</li>
    </ul>
  `
    },
    {
      titulo: 'AdaTrade',
      descricao: 'Plataforma web que organiza dados do comércio exterior brasileiro, permitindo visualização estratégica e análise de desempenho estadual com base em fontes oficiais.',
      imagem: '/images/Projeto3.png',
      github: 'https://github.com/equipeAdalove/API-SEMESTRE3',
      video: 'https://github.com/equipeAdalove/API-SEMESTRE3',
      tecnologias: ['HTML', 'CSS', 'TypeScript', 'ReactJs', 'NodeJs', 'NestJs', 'Python', 'Google Colab', 'PostgreSQL', '...'],
      descricaoDetalhada: `
    <p>
    <b>AdaTrade</b> é uma plataforma web que visa organizar e estruturar os dados de comércio exterior brasileiro, permitindo o acompanhamento detalhado do desempenho dos estados no mercado internacional. O sistema se baseia nos dados abertos do Ministério do Desenvolvimento, Indústria, Comércio e Serviços, oferecendo uma <b>interface interativa para análise e tomada de decisão.</b>
    <br>
    </p>
    <br>
    <p>Nele, o usuário pode:</p>
    <ul>
      <li>Visualizar estatísticas da balança comercial (importação e exportação) de cada estado</li>
      <li>Filtrar informações por período (2014-2024), estado e setor econômico</li>
      <li>Identificar tendências de crescimento, estagnação ou declínio nos municípios</li>
       <li>Gerar gráficos e relatórios interativos sobre o desempenho econômico</li>
      <li> Exportar dados e insights para análises externas</li>
    </ul>
  `
    }
  ];


  // Aqui ele envia os dados pra view
  res.render('index', { projetos });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

