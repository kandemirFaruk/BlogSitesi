const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const userRoute=require("./routers/UserRoute")
const app = express()

//Mongodb Bağlantısı
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL).then(() => {
   console.log('DB Connected Successfuly');
});

//Middlewares
app.use(express.static('public'));
app.use(express.json()); //body'den gelen verileri yakalamak için kullanılır
app.use(express.urlencoded({ extended: true }));

//Routers
app.use("/users",userRoute)


//Sunucuyu Başlattık
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
console.log(`App started on port ${port}`)
})