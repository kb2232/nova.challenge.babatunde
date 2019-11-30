const express = require('express');
const path = require('path');
const app = express();
const {GENERAL_SERVER_PORT} = require('./src/constants');



if(process.env.NODE_ENV ==='production'){
  console.log({env:"production"})
  app.use(express.static('dist'));
  // any get request made should 
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
  });
}else{
  console.log({env:"development"})
  const webpackMiddleware = require('webpack-dev-middleware'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
}

app.listen(GENERAL_SERVER_PORT,()=>console.log("Listening at port "+GENERAL_SERVER_PORT));