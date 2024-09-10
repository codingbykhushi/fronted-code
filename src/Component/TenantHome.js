import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TenantHome.css';
import SearchBar from './SearchBar';
import './Searchbar.css';
import { useNavigate } from 'react-router-dom'; // Update to useNavigate

function TenantHome() {
    const [categoryList, setCategoryList] = useState([]);
    const [priceFilter, setPriceFilter] = useState('');
    const [minPriceFilter, setMinPriceFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const navigate = useNavigate(); // Use navigate instead of history

    useEffect(() => {
        loadCategories();
    }, [priceFilter, minPriceFilter, locationFilter]);

    const loadCategories = async () => {
        try {
            let response = await axios.get("http://localhost:4000/rooms/Rooms");
            let filteredRooms = response.data.fetch;

            if (priceFilter) {
                filteredRooms = filteredRooms.filter(room => room.price <= priceFilter);
            }
            if (minPriceFilter) {
                filteredRooms = filteredRooms.filter(room => room.price >= minPriceFilter);
            }
            if (locationFilter) {
                filteredRooms = filteredRooms.filter(room => room.location.toLowerCase().includes(locationFilter.toLowerCase()));
            }

            setCategoryList(filteredRooms);
        } catch (error) {
            console.log(error);
        }
    };

    const handleBookRoom = async (room) => {
        try {
            const { data: { order } } = await axios.post('http://localhost:4000/api/addroom', { amount: room.price * 100 });
            openRazorpay(order, room);
        } catch (error) {
            console.error('Error creating Razorpay order:', error);
        }
    };

    const openRazorpay = (order, room) => {
        const options = {
            key: 'rzp_test_StX0f9E3xLkdGH',
            amount: order.amount,
            currency: 'INR',
            name: 'Room Rental',
            description: `Payment for ${room.title}`,
            order_id: order.id,
            handler: async (response) => {
                try {
                    const token = localStorage.getItem('token');

                    await axios.post('http://localhost:4000/api/addpay', {
                        amount: room.price,
                        roomId: room.Roomid,
                        razorpayPaymentId: response.razorpay_payment_id,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'tokenInput': token
                        }
                    });
                    alert(`Room ${room.roomId} booked successfully!`);

                    // Use navigate instead of history.push
                    navigate(`/rate-room/${room.Roomid}`);
                } catch (error) {
                    console.error('Error booking the room:', error);
                }
            },
            prefill: {
                name: 'User Name',
                email: 'user@example.com',
                contact: '9165920512',
            },
            notes: {
                address: 'User Address',
            },
            theme: {
                color: '#3399cc',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className='home-container overlay'>
            <div className="container mt-4">
                <SearchBar
                    onPriceChange={setPriceFilter}
                    onMinPriceChange={setMinPriceFilter}
                    onLocationChange={setLocationFilter}
                    priceFilter={priceFilter}
                    minPriceFilter={minPriceFilter}
                    locationFilter={locationFilter}
                />
                <div className="row">
                    {categoryList.map((room, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card">
                                <img src={room.imgUrl} height={250} className="card-img-top" alt="Room" />
                                <div className="card-body">
                                    <h5 className="card-title">Price: {room.price}</h5>
                                    <h5 className="card-title">Size: {room.size}</h5>
                                    <h5 className="card-title">Location: {room.location}</h5>
                                    <h5 className="card-title">Description: {room.description}</h5>
                                    <button className="btn btn-primary" onClick={() => handleBookRoom(room)}>Book Room</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TenantHome;
