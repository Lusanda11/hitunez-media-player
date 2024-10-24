// ****************** authMiddleware.js *********************

const jwt = require("jsonwebtoken"); // Import necessary modules.


// Middleware to check if JWT token is valid.
// ----------------------------------------------------------------------------------------------------------------------------
    const authenticateJWT = (req, res, next) =>
    {
        const token = req.headers.authorization?.split(" ")[1];  // Extract token from the Authorization header.

        if (!token)
        {
            return res.status(403).json({ message: "Access denied, no token provided" });
        }

        // Verify JWT token
        jwt.verify(token, process.env.JWT_SECRET, (err, user) =>
        {
            if (err)
            {
            return res.status(401).json({ message: "Invalid token" });
            }

            req.user = user;  // Attach the decoded token to request object for further use.
            next();  // Proceed to the next middleware or route handler.
        });
    };
// ----------------------------------------------------------------------------------------------------------------------------


module.exports = { authenticateJWT }; // Export necessary modules.
