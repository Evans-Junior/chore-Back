const express = require('express');
const mysql= require('mysql');
const cors =require('cors');

const app = express();
app.use9(cors());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'signup'
});