//메인서버
const express = require('express');
const app = express();
const api = require('./routes/index');
const bodyParser = require('body-parser');
const db_config = require('./config/dbconfig');
const conn = db_config.init();
const cors = require('cors');
const multer = require('multer');
const upload = multer()
const port = 3002;

db_config.connect(conn);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',api);

app.use('/image' , (req,res) =>{
    if(!req){
        res.send("Fail to Upload image");
    }
    res.send("success upload image");
});

app.get("/db", (req,res)=>{
    const sql = "SELECT * FROM refrigerater";
    conn.query(sql,function(err,rows,fields){
        if(err){
            console.log("DB조회실패" + err);
        }else{
            console.log(rows);
            res.send(rows);
        }
    })

})
//DB에 데이터 추가하는 부분
app.post('/db/items', upload.array(), (req,res) => {
    let sql = 'INSERT INTO refrigerater VALUE(?,?,?,?)';
    let name = req.body.name;
    let value = req.body.value;

    console.log(name);
    console.log(req.body.value);

    let params = [null,name,'테스트',value];
    conn.query(sql,params,
        (err,rows,fields)=>{
            res.send(rows);
        })
});

app.delete('/db/:id',(req,res)=> {
    let sql = 'DELETE FROM refrigerater WHERE id = ?';
    let params = [req.params.id];
    conn.query(sql, params,
        (err, rows, fields)=> {
            res.send(rows);
        })
})

app.listen(port, ()=>console.log(`Listening on port ${port}`));