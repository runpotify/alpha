import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import View from "./pages/View";

const Route = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<View />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Route;

