var express     = require('express'),
    app         = express(),
    ejs         = require('ejs'),
    bodyParser  = require('body-parser'),
    multer      = require('multer'),
    upload      = multer({ dest: 'uploads/' });
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/', upload.single('file-to-upload'), function (req, res) {
   console.log("recieved file!")
  console.log(req.file);
  console.log("did it work")
  var output = {
      size: req.file.size
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(output));
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server initialising...");
});