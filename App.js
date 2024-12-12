import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </Router>
    );
}

export default App;
