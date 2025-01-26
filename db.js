const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/login")
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log("Database cannot be Connected:", err));

const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const collection = mongoose.model("users", Loginschema);

module.exports = collection;
