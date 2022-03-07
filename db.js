const { default: mongoose } = require("mongoose")

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Connected to dataBase");
    } catch (error) {
        console.log(error);
        console.log("could not connected to database");
    }
}