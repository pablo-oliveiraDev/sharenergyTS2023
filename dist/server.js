"use strict";const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

app.use(express.urlencoded({
    extended: true,
}),
);
app.use(express.json());
app.use(cors());

const userLogRoutes = require('./routers/userLogRoutes');
const loginUser = require('./routers/loginUser');
const randomUser = require('./routers/randomUser');
const httpCatStatusCode = require('./routers/httpCatStatusCode');
app.use('/userLogRoutes',userLogRoutes);
app.use('/loginUser',loginUser);
app.use('/randomUser',randomUser);
app.use('/httpCatStatusCode',httpCatStatusCode);

const DB_USER = 'sharenergy';
const DB_PASSWORD = encodeURIComponent('UO30JjLCfwhFeFD6');
mongoose.set("strictQuery", true);
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@pabloliverfe.gbsk9c3.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(process.env.PORT || 5080, () => {
            console.log('VOCE ESTA CONECTADO EM http://localhost:5080')
        });
    })
    .catch((error) =>
        console.log('Erro ao conectar o servidor!', error));
