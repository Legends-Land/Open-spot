import express from "express";
import jwt from "jsonwebtoken"
import prisma from "../prismaClient.js";
import bcrypt from "bcryptjs";


const router = express.Router();



router.post('/signup', async (req, res) =>{

  const {email, password, role} = req.body
  
  //Hashing password from the req body
  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
      role,
    }
  })

    res.status(201).json({ message: "Register route works", user: user });

})


router.post('/login', async (req, res)=>{
  const {email, password} = req.body

  console.log(req.userId);

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
});

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return res.json({
    token: token,
    user: {
      email: user.email,
      role: user.role,
    }
  })



  });

  


export default router;