// ****************** itunesRoutes.js *********************

// Set up express router and import controller to handle iTunes API logic.
// ----------------------------------------------------------------------------------------------------------------------------
    const express = require("express");
    const { getItunesData } = require("../controllers/itunesController");
    const router = express.Router();
// ----------------------------------------------------------------------------------------------------------------------------


// Define the GET route for fetching music data from iTunes based on user queries.
// This route calls the 'getItunesData' function to retrieve the data.
// ----------------------------------------------------------------------------------------------------------------------------
    router.get("/", getItunesData);// Handles queries like /api/search?term=artist&mediaType=music
// ----------------------------------------------------------------------------------------------------------------------------


module.exports = router; // Export the router to be used in the main server file.
