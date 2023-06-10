const express = require("express");
const {connection} = require("./Configs/db");
require("dotenv").config();
const port = process.env.port;
const {postRoute} = require("./Routes/post.route");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/post",postRoute);
app.get("/",(req,res) => {
    res.send({"message":"Welcome to Plan My Trip Backend"});
})

app.listen(port,async() => {
    try{
        await connection;
        console.log("Connected to Database");
        console.log(`Server is running at port ${port}`);
    }
    catch(err){
        console.log(err.message);
    }
})

