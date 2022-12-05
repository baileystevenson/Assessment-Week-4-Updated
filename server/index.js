const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);



const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);



const { getGoal } = require('./controller')

app.get("/api/goal", getGoal);



const { getRef } = require('./controller')

app.get("/api/reference", getRef);


const {createAccomplish} = require('./controller')

app.post("/api/accomplish", createAccomplish)





app.listen(4000, () => console.log("Server running on 4000"));
