import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Q3 from './q3';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/q3" element={<Q3 />} />
            </Routes>
        </Router>
    );
}

export default App;