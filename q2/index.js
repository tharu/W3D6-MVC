const express = require('express');
const app = express();
const router=express.Router();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {

    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
 res.render("userinfo",{
         cssFile
 });
});
app.listen(3000);


app.post("/result",(req, res) =>{
 
    let name = req.body.name;
    let age = req.body.age;
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    //res.send(`<h1>Welcome ${name} age ${age} </h1>`);
    res.render("output",
    {
        cssFile,name,age
    }
    )
});
