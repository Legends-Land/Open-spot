import express from "express"
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"
import prisma from "../prismaClient.js"

const router = express.Router();


router.post('/login', async (req, res)=>{
  const {email, password} = req.body

  const user = await prisma.host.create({
    data: {
      name: username,
      password: password,
      email: email,
    },
});
  });

  


export default router;