
const express = require('express');
const app = express()
const dbConnection = require('./config/db')
const userModel = require('./models/user')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static("public"))

app.set("view engine", 'ejs')

app.get('/' , (req , res) =>{
    res.render('index')
})

app.get('/notes' , (req , res) =>{
    res.render('notes')
})


app.get('/register' , (req , res)=>{
    res.render('register')
})



app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    await userModel.create({
      username: username,
      email: email,
      password: password
    });
    
    
    res.redirect('/notes');
  });

app.post('/form-submit-data' , (req , res) =>{
    console.log(req.body) 
    res.send('Data received')
})

app.listen(4005)




