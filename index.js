const express = require('express');
const app = express();

const router = require('./app/routers/router.js');
const error404 = require('./app/middleware/404.js');


const PORT = process.env.PORT || 3000;

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

//------------------------------------
app.use(router);

app.use(error404);
//------------------------------------
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});
