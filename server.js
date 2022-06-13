const express =require("express");
// const bodyParser =require("body-parser");
 const cors =require("cors");
 const db = require("./app/model");
 //var multer  = require('multer')
 const app = express();
 const path =require("path");
 //const token=require('./app/middlewares/auth')

 var corsOptions = {
     origin:"http://localhost:8081"
 }

 
 

 app.use(cors(corsOptions));
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
//  app.use(multer.diskstorage)


 db.sequelize.sync();

app.get("/", (req,res) => {
    console.log("req.body",req.query)
    res.json({message : "welcome to  dev story."});
});


require("./app/routes/tutorial.routes")(app)
//app.use(token)
//app.use(express.static("uploads"));
 //app.use(express.static('/public'));

//console.log("hello",path.join(__dirname,"/uploads"))
// const publicpath =  path.resolve(__dirname);
//  app.use(publicpath,express.static("uploads"));


// app.use('/uploads', express.static('uploads'));








const PORT = process.env.PORT || 8080;
app.listen (PORT, () => {
    console.log(`server is runing on port ${PORT}.`);
})