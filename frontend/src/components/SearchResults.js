// ****************** SearchResults.js *********************

// Import necessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    import React from "react";
    import { Card, Button } from "react-bootstrap";
// ----------------------------------------------------------------------------------------------------------------------------

// Accepts results, addToFavourites, and favourites as props.
// ----------------------------------------------------------------------------------------------------------------------------
    const SearchResults = ({ results, addToFavourites, favourites = [] }) =>
    {
      return (
        <div className="results-container" style={{ display: 'flex', overflowX: 'auto' }}>
          {results.map((item) => (
            <Card key={item.trackId} className="result-card" style={{ minWidth: '200px', margin: '10px' }}>
              {/* Ensure artwork URL is correctly fetched */}
              <Card.Img
                variant="top"
                src={item.albumCover ? item.albumCover : 'https://via.placeholder.com/100'}
                alt={item.trackName}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{item.trackName}</Card.Title>
                <Card.Text>{item.artistName}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => addToFavourites(item)}
                  disabled={favourites.some((fav) => fav.trackId === item.trackId)}
                >
                  {favourites.some((fav) => fav.trackId === item.trackId)
                    ? "Added to Favourites"
                    : "Add to Favourites"}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      );
    };
// ----------------------------------------------------------------------------------------------------------------------------

export default SearchResults; // Export necessary modules.
