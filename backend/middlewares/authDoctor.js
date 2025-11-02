// backend/middlewares/authDoctor.js
import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
  try {
    // read token from header (you used 'token' earlier)
    const token = req.headers?.token || req.headers?.authorization?.split?.(' ')[1]
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // attach user id to req (safe for GET/POST)
    req.docId = decoded.id || decoded._id

    // optional: keep backward compatibility for code that expects req.body.docId
    if (!req.body) req.body = {}
    req.body.docId = req.docId

    next()
  } catch (error) {
    console.log('Auth error:', error)
    return res.status(401).json({ success: false, message: 'Invalid or expired token' })
  }
}

export default authDoctor
