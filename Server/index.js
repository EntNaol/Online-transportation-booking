require("dotenv").config();

//import usersRoute from "./routes/admin";
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors =require('cors')
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv: ")

const AdminRouter = require('./routes/admin');
const AdminAuthRouter = require('./routes/authAdmin')
const AgentRouter = require('./routes/agent');
const AgentAuthRouter = require('./routes/authAgent')

app.use("/api/admin", AdminRouter);
app.use("/api/auth", AdminAuthRouter)
app.use("/api/agent", AgentRouter);
app.use("/api/authAgent", AgentAuthRouter);

app.listen(3001, ()=>{
    console.log("Server has started")
})

