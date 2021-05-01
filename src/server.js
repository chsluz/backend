const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const Routes = require('./Routes');

mongoose.connect('mongodb+srv://henrique:10203040@cluster0.yuers.mongodb.net/custumers?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use(Routes);

app.listen(3333);