// ****************** server.js *********************

// Import necessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    const express = require("express");
    const cors = require("cors");
    const dotenv = require("dotenv");
    const itunesRoutes = require("./routes/itunesRoutes");
    const { authenticateJWT } = require("./auth/authMiddleware");
    // const { generateToken } = require("./auth/generateToken");
// ----------------------------------------------------------------------------------------------------------------------------

dotenv.config();

const app = express();

// Middleware.
// ----------------------------------------------------------------------------------------------------------------------------
    app.use(cors());  // Enable CORS.
    app.use(express.json());  // For parsing JSON in request body.
// ----------------------------------------------------------------------------------------------------------------------------

// Routes.
// ----------------------------------------------------------------------------------------------------------------------------
    app.use("/api/search", authenticateJWT, itunesRoutes); // Securing route with JWT.
// ----------------------------------------------------------------------------------------------------------------------------


// Port setup.
// ----------------------------------------------------------------------------------------------------------------------------
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
    {
        console.log(`Server running on http://localhost:${PORT}`);
    });
// ----------------------------------------------------------------------------------------------------------------------------
