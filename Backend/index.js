const express = require("express")
const database = require("./dbConnection")
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const userData = require("./User")

database.connect();
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
app.post('/save',async (req, res)=>{
    const {Name,EnterTime}=req.body;
    console.log(Name, EnterTime)
    const result= await userData.create(req.body);
    return res.status(200).json(result);
})

app.get('/get', async(req,res)=>{
    const result = await userData.find();
    return res.status(200).json(result);
} )

app.listen(3000, () => console.log('Server is running'));