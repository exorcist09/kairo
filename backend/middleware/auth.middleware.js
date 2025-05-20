const jwt = require("jsonwebtoken");
const { verifyToken } = require("../utils/jwt");

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Authorization token Missing, Please Login Again" });
  }

  const token = authHeader.split(" ")[1]; // taking out jwt token from the authHeader kyuki it somewhat looks liek this --> Authorization : Bearer  jwtTOken--> over here jwtTOken is present on the 1 position
  try {
    const decoded = verifyToken(token);
    req.user = decoded; // attach user info to request for next middleware/handlers
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
