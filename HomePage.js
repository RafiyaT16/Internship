import React, { useState, useEffect } from 'react';
import ProfileList from '../components/ProfileList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
    const [profiles, setProfiles] = useState([]);
    const [filteredProfiles, setFilteredProfiles] = useState([]);

    useEffect(() => {
        // Fetch profiles from API or mock data
        const fetchProfiles = async () => {
            const data = [
                { id: 1, name: 'John Doe', description: 'Web Developer', photo: 'john.jpg', address: 'New York, USA' },
                { id: 2, name: 'Jane Smith', description: 'Graphic Designer', photo: 'jane.jpg', address: 'Los Angeles, USA' }
            ];
            setProfiles(data);
            setFilteredProfiles(data);
        };

        fetchProfiles();
    }, []);

    const handleSearch = (query) => {
        const result = profiles.filter(profile => profile.name.toLowerCase().includes(query.toLowerCase()));
        setFilteredProfiles(result);
    };

    return (
        <div>
            <h1>Profile Explorer</h1>
            <SearchBar onSearch={handleSearch} />
            <ProfileList profiles={filteredProfiles} />
        </div>
    );
};

export default HomePage;
