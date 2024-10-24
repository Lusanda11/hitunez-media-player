// ****************** itunesController.js *********************

const axios = require("axios"); // Import necessary modules.


// Handler to fetch data from iTunes API.
// ----------------------------------------------------------------------------------------------------------------------------
    const getItunesData = async (req, res) =>
    {
        try
        {
            const { term, mediaType } = req.query;  // Get the search term and media type from the query params.

            // Set default search values if no term or media type is provided.
            const searchTerm = term || "beatles";  // Default search term if none provided.
            const media = mediaType || "music";  // Default media type.

            // Call the iTunes API
            const response = await axios.get("https://itunes.apple.com/search",
            {
                params:
                {
                    term: searchTerm,
                    media: media,
                    limit: 10
                }
            });

            // Extract relevant data (album name, artist name, album cover, release date).
            const results = response.data.results.map(item => (
            {
                albumName: item.collectionName || "Unknown Album",
                artistName: item.artistName || "Unknown Artist",
                albumCover: item.artworkUrl100 || "No Cover Image Available",
                releaseDate: item.releaseDate || "Unknown Release Date"
            }));

            res.json(results);  // Send data to the client.

        }
        catch (error)
        {
            console.error("Error fetching iTunes data:", error);
            res.status(500).json({ error: "Failed to fetch data from iTunes API" });
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------


module.exports = { getItunesData }; // Export necessary modules.
