'use strict';

const express = require('express');
const cors = require('cors');

// require and use "multer"...
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

let app = express();

//app.use(fileUpload());


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

//upfile is the name of the file input field. 
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  console.log(req.file);
  let file = req.file;
  if (Object.keys(file).length == 0) {
    return res.status(400).send({Error:'No files were uploaded.'});
  }else{
    res.send({name: file.originalname, type: file.mimetype, size: file.size});
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

