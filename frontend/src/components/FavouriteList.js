// ****************** FavoriteList.js *********************


// Import necessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    import React from "react";
    import { FaTrash } from "react-icons/fa";
    import "../styles/FavouriteList.css"; // Assuming you have a separate CSS file for styling

// ----------------------------------------------------------------------------------------------------------------------------

// Accepts favorites (array of favorite items) and onRemoveFromFavorites (function to handle item removal).
// ----------------------------------------------------------------------------------------------------------------------------
    const FavouriteList = ({ favourites, removeFromFavourites }) =>
    {
        if (!favourites || favourites.length === 0)
        {
            return <div className="no-favourites-container"><p>No favourites added yet.</p></div>;
        }
        console.log(favourites);
        return (
            <div className="favourites-container">
              <h3>Your Favourites</h3>
              <div className="favourites-scroll">
                {favourites.map((favourite, index) => (
                  <div key={index} className="favourite-item">
                    <img
                      src={favourite.albumCover ? favourite.albumCover : 'https://via.placeholder.com/100'}
                      alt={favourite.albumName}
                      className="favourite-image"
                    />
                    <div className="favourite-info">
                      <p>{favourite.albumName} by {favourite.artistName}</p>
                      <FaTrash className="remove-icon" onClick={() => removeFromFavourites(favourite.trackId)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
        );
    };
// ----------------------------------------------------------------------------------------------------------------------------

export default FavouriteList; // Export necessary modules.
