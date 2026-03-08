import express from "express";
// import prisma
//  from "../prismaClient";

 const router = express.Router();

 const host = [
   {
     id: 1,
     firstName: "Mike",
     lastName: "Johnson",
     email: "mike@gmail.com",
     role: "admin",
   },
   
   {
     id: 2,
     firstName: "Matt",
     lastName: "Milton",
     email: "matt@gmail.com",
     role: "guest",
   },
   
   {
     id: 3,
     firstName: "Jim",
     lastName: "Jones",
     email: "jim@gmail.com",
     role: "host",
   },
 ]

//  router.get ('/' , async  (req, res)=>{
//  const vehicles = await prisma.vehicles.findMany({
//   where: {
//     hostId: req.hostId
//   }
//  })
//  res.json(hosts)
//  });

//  router.get('/', async (req, res)=>{
//   const host = await.prisma.
//   res.json(host)
// })

router.post ('/', async (req, res) =>{
  const {firstName, lastName} = req.body

try {
  const host = await prisma.host.create({
  
    data:{
      firstName,
      lastName,
    }

  })

  res.status(201).json({ host});

} catch (err) {


}

});

export default router;