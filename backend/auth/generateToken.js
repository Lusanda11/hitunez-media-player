// ****************** generateToken.js *********************

const jwt = require("jsonwebtoken"); // Import necessary modules.

// Function to generate a JWT token.
// ----------------------------------------------------------------------------------------------------------------------------
    const generateToken = (user) =>
    {
        const payload =
        {
            id: user.id,
            username: user.username
        };

        return jwt.sign(payload, process.env.JWT_SECRET,
        {
            expiresIn: "1h",  // Token expires in 1 hour
        });
    };
// ----------------------------------------------------------------------------------------------------------------------------


module.exports = { generateToken }; // Export necessary modules.
