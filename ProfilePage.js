import React from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from '../components/MapComponent';

const ProfilePage = () => {
    const { id } = useParams();

    const profile = {
        id,
        name: 'John Doe',
        address: 'New York, USA',
        description: 'Web Developer'
    };

    return (
        <div>
            <h1>{profile.name}</h1>
            <p>{profile.description}</p>
            <MapComponent address={profile.address} />
        </div>
    );
};

export default ProfilePage;
