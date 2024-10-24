// ****************** MediaTypeSelect.js *********************

// Import necessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    import React from "react";
    import { Form } from "react-bootstrap";
// ----------------------------------------------------------------------------------------------------------------------------

// Accepts selectedType (currently selected media type) and onTypeChange (handler for selecting a new media type) as props.
// ----------------------------------------------------------------------------------------------------------------------------
    const MediaTypeSelect = ({ selectedType, onTypeChange }) =>
    {
      return (
        <Form.Group className="media-select">
          <Form.Label>Select Media Type</Form.Label>
          <Form.Control as="select" value={selectedType} onChange={onTypeChange}>
            <option value="all">All</option>
            <option value="movie">Movies</option>
            <option value="podcast">Podcasts</option>
            <option value="music">Music</option>
            <option value="audiobook">Audiobooks</option>
            <option value="shortFilm">Short Films</option>
            <option value="tvShow">TV Shows</option>
            <option value="software">Software</option>
            <option value="ebook">eBooks</option>
          </Form.Control>
        </Form.Group>
      );
    };
// ----------------------------------------------------------------------------------------------------------------------------

export default MediaTypeSelect; // Export necessary modules.
