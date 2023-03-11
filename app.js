import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import { v2 as cloudinary } from 'cloudinary';
import fileUpload from "express-fileupload";
import AuthRoute from "./routers/AuthRoute.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
//Connection to the db
conn();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
pp.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Routers
app.use("/Auth", AuthRoute);

//Sunucuyu Başlattık
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
