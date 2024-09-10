import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage() {
    const [catogorylist, setcategory] = useState([]);

    useEffect(() => {
        loadcatogries();
    }, []);

    const loadcatogries = async () => {
        try {
            let response = await axios.get("http://localhost:4000/user/Rooms");
            console.log("Response:", response.data);
            setcategory(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="container mt-4">
            {/* <h1>Welcome to House.com</h1>
            <p>Your one-stop destination for finding the perfect home. Explore our listings and find your dream home today!</p> */}
            <div className="row">
                {catogorylist.length > 0 ? (
                    catogorylist.map((room, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <img
                                    src="https://via.placeholder.com/250"
                                    height={250}
                                    className="card-img-top"
                                    alt={`Room in ${room.location}`}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Location: {room.location}</h5>
                                    <p className="card-text">Size: {room.size}</p>
                                    <p className="card-text">Description: {room.description}</p>
                                    <h6 className="card-text">Price: ₹{room.price}</h6>
                                    <button onClick={() => alert('Room added successfully')} className="btn btn-primary">Add Room</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No rooms available.</p>
                )}
            </div>
        </div>
    );
}

export default HomePage;
