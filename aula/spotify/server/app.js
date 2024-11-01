import express from 'express'
import conectaNaDb from './db.js';
import cors from 'cors'
import artistas from './models/artista.js';
import genero from './models/Generos.js';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error',(erro) => {
    console.log('Erro ao conectar no MongoDB', erro)
})

conexao.once('open', () => {
    console.log('Conectado ao MongoDB')
})

app.get('/artistas', async (req, res) =>{
    const listaArtistas = await artistas.find({});
    res.status(200).json(listaArtistas);
})

app.get('/generos', async (req, res) =>{
    const listaGeneros = await genero.find({});
    res.status(200).json(listaGeneros)
})

app.get('artistas/:id', async (req, res) =>{
    const artista = await artistas.findById(req.params.id);
    res.status(200).json(artista);
})

app.get('/', (req, res) => {
    res.send('Olá API!');
});

app.listen(3000, () =>{
    console.log('Servidor conectado')
})