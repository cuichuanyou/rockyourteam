module.exports = {
  devServer:{
    open:true,
    host:'0.0.0.0',
    port:'8080',
    https:false,
    proxy:{
      '/api':{
        target:'http://localhost:5000/api/',
        ws:true,
        changOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}