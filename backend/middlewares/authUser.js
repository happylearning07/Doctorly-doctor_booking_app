

// backend/middlewares/authUser.js
import jwt from 'jsonwebtoken'

// user authentication middleware
const authUser = async (req, res, next) => {
  try {
    // read token from header (you used 'token' earlier)
    const token = req.headers?.token || req.headers?.authorization?.split?.(' ')[1]
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // attach user id to req (safe for GET/POST)
    req.userId = decoded.id || decoded._id

    // optional: keep backward compatibility for code that expects req.body.userId
    if (!req.body) req.body = {}
    req.body.userId = req.userId

    next()
  } catch (error) {
    console.log('Auth error:', error)
    return res.status(401).json({ success: false, message: 'Invalid or expired token' })
  }
}

export default authUser
