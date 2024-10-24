// ****************** App.js *********************


// Import necessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    import React, { useState } from "react";
    import { searchMedia } from "./utils/api"; // Ensure this API function is correct
    import { Link } from "react-router-dom";
    import SearchBar from "./components/SearchBar";
    import SearchResults from "./components/SearchResults";
    import MediaTypeSelect from "./components/MediaTypeSelect";
    import FavouriteList from "./components/FavouriteList";
    import "./App.css";
// ----------------------------------------------------------------------------------------------------------------------------

// Defines the main App component as a functional component.
const App = () =>
{

// State management.
// ----------------------------------------------------------------------------------------------------------------------------
    const [selectedType, setSelectedType] = useState("all"); // Manages the selected media type (like "movie", "music", etc.) in a state variable.
    const [results, setResults] = useState([]); // Stores the search results in state, initially as an empty array.
    const [favourites, setFavourites] = useState([]); // Stores the user's favourite items in state, initially as an empty array.
// ----------------------------------------------------------------------------------------------------------------------------


// Handle media type selection.
// ----------------------------------------------------------------------------------------------------------------------------
    const handleMediaTypeChange = (e) =>
    {
        if (e && e.target)
        {
            setSelectedType(e.target.value); // Safely handle the event object
        }
        else
        {
            console.error("Error: Event or event target is undefined.");
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------


// Handle search action.
// ----------------------------------------------------------------------------------------------------------------------------
    const handleSearch = async (term) =>
    {
        if (term.trim() === "")
        {
            alert("Please enter a valid search term");
            return;
        }
        try
        {
            const mediaResults = await searchMedia(term, selectedType);
            setResults(mediaResults); // Set the search results in state
        }
        catch (error)
        {
            console.error("Error fetching media:", error);
        }
    };
 // ----------------------------------------------------------------------------------------------------------------------------


// Add to favourites, ensuring no duplicates.
// ----------------------------------------------------------------------------------------------------------------------------
    const addToFavourites = (item) =>
    {
        if (!favourites.some(fav => fav.trackId === item.trackId))
        {
            setFavourites([...favourites, item]);
        }
        else
        {
            alert("This item is already in your favourites!");
        }
    };
// ----------------------------------------------------------------------------------------------------------------------------



// Remove from favourites.
// ----------------------------------------------------------------------------------------------------------------------------
    const removeFromFavourites = (trackId) =>
    {
        setFavourites(favourites.filter((item) => item.trackId !== trackId));
    };
// ----------------------------------------------------------------------------------------------------------------------------


// JSX Layout (Rendering).
// ----------------------------------------------------------------------------------------------------------------------------
    return (
        <div className="app-container">
          {/* Header Section */}
          <header className="header">
            <Link to="/" className="home-link">
              <img
                src="/hiTunez_home.png" // Ensure the path is correct
                alt="Home"
                className="home-logo"
                onClick={() => window.location.reload()} // Reload the page when logo is clicked
              />
            </Link>
            <div className="header-text">
              <h1>hiTunez.</h1>
              <p>The best place to watch and listen to your favourite content.</p>
            </div>
          </header>

          {/* Search Bar */}
          <SearchBar
            onSearch={handleSearch}
          />

          {/* Media Type Selector */}
          <MediaTypeSelect
            selectedType={selectedType}
            onTypeChange={handleMediaTypeChange}
          />

          {/* Search Results */}
          <SearchResults
            results={results}
            addToFavourites={addToFavourites}
            favourites={favourites}
          />

          {/* Favourites List */}
          <FavouriteList
            favourites={favourites}
            removeFromFavourites={removeFromFavourites}
          />
        </div>
    );
// ----------------------------------------------------------------------------------------------------------------------------
};

export default App; // Export necessary modules.
