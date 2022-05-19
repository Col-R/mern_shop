// data import script. gets the json formatted data from data/products.js into the mongoDB database
// npm run data:import

require('dotenv').config();

const productsData = require('./data/products')
const connectDB = require('./config/db')
const Product = require('./models/Product')

connectDB();

const importData = async () =>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("data import success");
        process.exit();
    } catch (error) {
        console.error("error with data import");
        process.exit(1);
    }
};

importData()