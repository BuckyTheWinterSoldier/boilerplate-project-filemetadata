var express = require('express');
var cors = require('cors');
let multer = require('multer');
let upload=multer({dest:"uploads/"});
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.single('upfile'),(request,response)=>{
  console.log(request.file);
 response.json({
  "name": request.file.originalname,
  "type": request.file.mimetype,
  "size": request.file.size
})
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
