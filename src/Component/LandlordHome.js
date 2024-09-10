import React, { useContext, useState } from 'react';
import axios from 'axios';
import './landlordHome.css';
import { UserContext } from './UserContext';

function LandlordHome() {
    const { user } = useContext(UserContext);
    const [roomData, setRoomData] = useState({
        description: '',
        price: '',
        location: '',
        size: '',
        imgUrl: null
    });

    const handleChange = (e) => {
        setRoomData({
            ...roomData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setRoomData({
            ...roomData,
            imgUrl: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user?.id) {
            alert('User ID not found. Please log in.');
            return;
        }

        const formData = new FormData();
        formData.append('description', roomData.description);
        formData.append('price', roomData.price);
        formData.append('location', roomData.location);
        formData.append('size', roomData.size);
        formData.append('imgUrl', roomData.imgUrl);
        formData.append('id', user.id);

        try {
            const response = await axios.post('http://localhost:4000/rooms/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Room added successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error adding room:', error);
            alert('Failed to add room.');
        }
    };

    return (
        <div className="add-room-container">
            <h2>Add a New Room</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={roomData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={roomData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={roomData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Size:</label>
                    <input
                        type="text"
                        name="size"
                        value={roomData.size}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="file"
                        name="imgUrl"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Add Room</button>
            </form>
        </div>
    );
}

export default LandlordHome;
