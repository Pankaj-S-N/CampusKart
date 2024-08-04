import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const connection = () => {
    const MONGODB_URI = '';

    mongoose.connect(MONGODB_URI,{ useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Database error', error.message);
    })
}