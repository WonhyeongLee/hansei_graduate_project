const express = require('express');
const app = express();
const api = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3002;


app.use(cors());
app.use(bodyParser.json());

app.use('/image' , (req,res) =>{
    if(!req){
        res.send("Fail to Upload image");
    }
    res.send("success upload image");
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));

// app.get("/*", function (req,res){
//     res.sendFile(__dirname + "../../dist/index.html");
// });
