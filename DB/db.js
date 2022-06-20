const {Client} = require('pg');
require('dotenv').config();

const client=new Client({
  user: process.env.qa_user,
  host: process.env.qa_host,
  database: process.env.qa_database,
  port: process.env.qa_port
 })

 client.connect(function (err) {
   if(err) {
     throw err;
   }
   console.log('connected!')
 });

 module.exports=client;