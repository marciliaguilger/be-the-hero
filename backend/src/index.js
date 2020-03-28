const express = require('express'); //importação dos recursos do microframework do express
const cors = require('cors'); // npm install cors
const routes = require('./routes');

const app = express();

app.use(cors());
// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

app.use(express.json()); //configurando o corpo da requisição de json para obj JS
app.use(routes);

app.listen(3333); //porta  do localhost para execução do app