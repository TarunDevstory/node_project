var multer  = require('multer');
// const { dirname } = require('path');
const path =require("path");
const fs=require('fs-extra')


// console.log(path.join(__dirname,"../../uploads"))


var storage = multer.diskStorage({


    destination: function (req, file, cb) {
console.log(req,"hellooo")
    const id=req.body.id;
    const path=

      cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})


var upload = multer({ storage: storage });

module.exports = {upload};