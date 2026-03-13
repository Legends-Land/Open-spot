import dotenv from "dotenv"
dotenv.config();
import express from "express"
import cors from "cors"
// import { configDotenv } from "dotenv";
import authRoutes from "./routes/authRoutes.js";
// import guestRoutes from "./routes/guestRoutes.js";
import hostRoutes from "./routes/hostRoutes.js";

const app = express();
const PORT = process.env.PORT || 3002

//Permission to receive req and res from my front end 
// and responses from my back. No matter the method.
app.use(cors({
  origin: process.env.CLIENT_URL , //vite front end
  // origin: "http://localhost:5176", //vite front end
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
   allowedHeaders: ["Content-Type", "Authorization","Access-Control-Allow-Origin"]
})); 



app.use(express.json());

//Routes
app.use("/auth", authRoutes);
// app.use("/guest", guestRoutes);
app.use("/host", hostRoutes);



//Routes
// app.use ("/auth", authRoutes);
// app.use ("/guest", guestRoutes);
// app.use ("/host", hostRoutes);


app.get('/here', (req, res) =>{
  res.send("We up and moving")
})

app.listen(PORT, ()=>{
  console.log(`${PORT} is running legend`)
})

