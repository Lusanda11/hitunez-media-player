// ****************** SearchBar.js *********************


// Import necessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    import React, { useState } from "react";
    import { Form, Button } from "react-bootstrap";
// ----------------------------------------------------------------------------------------------------------------------------

// Accepts onSearch (function to handle the search) as a prop.Uses useState to manage the search term (term), initially an empty string.
// ----------------------------------------------------------------------------------------------------------------------------
    const SearchBar = ({ onSearch }) =>
    {
        const [term, setTerm] = useState("");

        const handleSearch = (e) =>
        {
            e.preventDefault();
            onSearch(term);
        };

        return (
            <Form onSubmit={handleSearch} className="search-bar">
              <Form.Control
                type="text"
                placeholder="Search for media content..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              <Button variant="primary" type="submit">Search</Button>
            </Form>
        );
    };
// ----------------------------------------------------------------------------------------------------------------------------

export default SearchBar; // Export necessary modules.
