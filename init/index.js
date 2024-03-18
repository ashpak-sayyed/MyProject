const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const mongoURL = 'mongodb://127.0.0.1:27017/wanderlust';
main().then((res) => { console.log("Connection successfuly") })
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongoURL);
}


const initDB = async() => { 
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj , owner : "65f33493524c1a579850dc43"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();