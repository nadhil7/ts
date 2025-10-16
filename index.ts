import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes/Router.js';
import mongoose from 'mongoose';


const app = express();
// Connect to MongoDB
await mongoose.connect(process.env.mongo_url || "")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);


// Use the PORT  3000
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});