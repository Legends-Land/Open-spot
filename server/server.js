import express from "express"
import cors from "cors"
import { configDotenv } from "dotenv";

const app = express();
const PORT = process.env.PORT || 3002


//Permission to receive req and res from my front end 
// and responses from my back. No matter the method.
app.use(cors({
  origin: "http://localhost:5174", //vite front end
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
   allowedHeaders: ["Content-Type", "Authorization"]
})); 

app.get('/', (req, res) =>{
  res.send("We up and moving")
})

app.listen(PORT, ()=>{
  console.log(`${PORT} is running legend`)
})