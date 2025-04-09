const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.render('index', { nome: 'Seu Nome', curso: 'Seu Curso' });
});

// Rota de projetos
app.get('/projetos', (req, res) => {
  const projetos = [
    { titulo: 'Projeto 1', descricao: 'Descrição do projeto 1' },
    { titulo: 'Projeto 2', descricao: 'Descrição do projeto 2' },
  ];
  res.render('projetos', { projetos });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
