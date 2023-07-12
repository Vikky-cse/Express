const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/login", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.post('/register', (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.post("/login",(req,res)=>{
    const {email,password} = req.body
    UserModel.findOne({email:email})
    .then((user)=>{
        if(user){
            if(user.password == password){
                res.json("Success")
            }
            else{
                res.json("incorrect password")
            }
        }
        else{
            res.json(`No user found with email ${email}`)
        }
    })
})

app.listen(3001, () => {
  console.log("Server is running");
});
