const express = require('express');
const path = require('path');
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => {
  res.render('index', { nome: 'Seu Nome', curso: 'Seu Curso' });
});

app.get('/projetos', (req, res) => {
  const projetos = [
    { titulo: 'Projeto 1', descricao: 'Descrição do projeto 1' },
    { titulo: 'Projeto 2', descricao: 'Descrição do projeto 2' },
  ];
  res.render('projetos', { projetos });
});

// Inicialização
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
