// ****************** api.js *********************


import axios from "axios"; // Import necessary modules.
const BASE_URL = "https://itunes.apple.com/search";  // iTunes Search API endpoint

// Function to search for media content based on term and media type.
// ----------------------------------------------------------------------------------------------------------------------------
    export const searchMedia = async (term, mediaType = "all") =>
    {
        try
        {
            const response = await axios.get(BASE_URL,
            {
                params:
                {
                    term,                         // Search term entered by user
                    media: mediaType === "all" ? undefined : mediaType,  // Set media type, default to undefined for "all"
                    limit: 25,                    // Limit to 25 results
                    country: "US",                // Restrict results to the US (optional)
                },
            });

            // Return the results in a cleaner format
            return response.data.results.map((item) => (
            {
                albumName: item.collectionName || item.trackName,
                artistName: item.artistName,
                albumCover: item.artworkUrl100,
                releaseDate: item.releaseDate,
                trackId: item.trackId,
            }));
        }
        catch (error)
        {
            console.error("Error fetching data from iTunes API:", error);
            throw error;
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------
