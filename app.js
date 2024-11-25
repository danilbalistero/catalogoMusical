const express = require('express');
const methodOverride = require('method-override');
const discoRoutes = require('./routes/discoRoutes');
const artistaRoutes = require('./routes/artistaRoutes');
const faixaRoutes = require('./routes/faixaRoutes');
const generoRoutes = require('./routes/generoRoutes');

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', './views');   

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('layout', { title: 'Catálogo Musical' }); 
});

app.use('/disco', discoRoutes);
app.use('/artistas', artistaRoutes);
app.use('/faixas', faixaRoutes);
app.use('/generos', generoRoutes);

app.use('/uploads', express.static('public/uploads'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
