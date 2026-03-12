import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {

  //Getting the Authorazation header from req being sent.
  const authHeader = req.headers.authorization;

  //If no header exist run this code.
  if (!authHeader) {
    return res.status(401).json ({message: "No token provided"});

  } 
//Grabbing token from header
// Bear aahfHIUhonfahuHOIhjfahoh49aadfa84afa984faf841
  const token = authHeader.split("")[1];

  if(!token) {
    return res.status(401).json ({message: "Token Missing"});
  }

  try {
    //verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Attach userId to request
    req.userId = decoded.id;

    //Continue to route
    next();

  } catch (err) {
    return res.status(403).json({message: "Invalid token"});

  }

  
};

export default verifyToken;