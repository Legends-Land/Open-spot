import express from "express"
import { configDotenv } from "dotenv";

const app = express();
const PORT = process.env.PORT || 3002

app.get('/', (req, res) =>{
  res.send("We up and moving")
})

app.listen(PORT, ()=>{
  console.log(`${PORT} is running legend`)
})