import express from "express";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"
import prisma from "../prismaClient.js";

const router = express.Router();


router.post('/login', async (req, res)=>{
  const {email, password} = req.body

  const users = await prisma.user.create({
    data: {
      email: email,
      password: password,
    
    },
});
  });

  


export default router;