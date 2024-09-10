import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Pageee() {
    const [catogorylist, setcategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadcatogries();
    }, []);

    const loadcatogries = async () => {
        try {
            let response = await axios.get("http://localhost:4000/user/Rooms");
            setcategory(response.data.fetch);
        } catch (error) {
            console.log(error);
        }
    };

    const chunkArray = (array, chunkSize) => {
        return array.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / chunkSize);

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [];
            }

            resultArray[chunkIndex].push(item);

            return resultArray;
        }, []);
    };

    const roomsInRows = chunkArray(catogorylist, 3);

    const handleBookRoom = () => {

        navigate('/payment');
    };

    return (
        <>
            {roomsInRows.map((row, rowIndex) => (
                <div className="container mt-4" key={rowIndex}>
                    <div className="row">
                        {row.map((room, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card">
                                    <img src={room.imgUrl} height={250} className="card-img-top" alt="Feature 1" />
                                    <div className="card-body">
                                        <h5 className="card-title">Price: {room.price}</h5>
                                        <h5 className="card-title">Size: {room.size}</h5>
                                        <h5 className="card-title">Location: {room.location}</h5>
                                        <button className="btn btn-primary" onClick={handleBookRoom}> Book Room </button>
                                        <button className="btn btn-primary" style={{ marginTop: '2%' }}> Add To  Card </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Pageee;
