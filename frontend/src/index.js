// ****************** index.js *********************

// Import neccessary modules.
// ----------------------------------------------------------------------------------------------------------------------------
    import React from "react";
    import ReactDOM from "react-dom/client";  // Import the new ReactDOM
    import App from "./App";
    import { BrowserRouter } from "react-router-dom";
    import "./index.css";
// ----------------------------------------------------------------------------------------------------------------------------


// root Initialization: Uses ReactDOM.createRoot to initialize the root of the React app.
// ----------------------------------------------------------------------------------------------------------------------------
    const root = ReactDOM.createRoot(document.getElementById("root"));  // Create root
    root.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
    );
// ----------------------------------------------------------------------------------------------------------------------------
