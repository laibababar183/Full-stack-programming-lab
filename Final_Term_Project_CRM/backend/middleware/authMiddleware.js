const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  // Header se token nikalo
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. No token.' });
  }
  
  const token = authHeader.split(' ')[1]; // "Bearer TOKEN123" → "TOKEN123"
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // user info request mein daal do
    next(); // aage route pe jaao
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = protect;