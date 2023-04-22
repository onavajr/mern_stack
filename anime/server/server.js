const express = require("express");
cosnt cors = require('cors');
const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

require('./config/mongoose.config');
require('.routs');