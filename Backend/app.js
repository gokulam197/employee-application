const express=require('express');
const app=new express();
const dotenv= require('dotenv');
require('dotenv').config();
const PORT=process.env.port;
require('./db/dbConnection')