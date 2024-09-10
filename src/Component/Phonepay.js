import React from 'react';
import initiatePayment from '../utils/paymentUtils';

const Phonepay = ({ amount, onPaymentSuccess }) => {
    const handleClick = async () => {
        if (!amount || amount <= 0) {
            alert('Please enter a valid amount before proceeding.');
            return;
        }

        try {
            const paymentResponse = await initiatePayment(amount, 'PhonePe');
            if (paymentResponse.success) {
                onPaymentSuccess();
            } else {
                alert('Payment failed: ' + (paymentResponse.error || 'Unknown error occurred'));
            }
        } catch (error) {
            console.error('Error processing PhonePe payment:', error);
            alert('Error processing PhonePe payment. Please try again.');
        }
    };

    return (
        <button type="button" className="btn btn-light me-2" onClick={handleClick}>
            <img
                src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"
                alt="PhonePe"
                style={{ width: '100px', height: 'auto' }}
            />
        </button>
    );
};

export default Phonepay;
