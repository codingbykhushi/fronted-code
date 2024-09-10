import React from 'react';

function Cart({ cart }) {
    return (
        <div className="container mt-4">
            <h2>Your Cart</h2>
            {cart.length > 0 ? (
                <ul className="list-group">
                    {cart.map((room, index) => (
                        <li className="list-group-item" key={index}>
                            <h5>Price: {room.price}</h5>
                            <p>Size: {room.size}</p>
                            <p>Location: {room.location}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default Cart;
