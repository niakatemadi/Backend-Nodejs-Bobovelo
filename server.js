const express = require('express');
const app = express();
const cors = require('cors');


// Middleware

app.use(cors({origin:'*'}));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
/*app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
 })
*/
// Routers
const usersRouter = require('./routes/usersRouter.js');
const servicesRouter = require('./routes/servicesRouter.js');
const demandesRouter = require('./routes/demandesRouter.js');

app.use('/api/utilisateurs', usersRouter);
app.use('/api/services', servicesRouter);
app.use('/api/demandes', demandesRouter);

// Testing API

app.get('/hello', (req, res) => {
    res.json('Good morning Madi !')
})
// Port

const PORT = process.env.PORT || 8090 ;

// server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})






