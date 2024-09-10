import React from 'react';
import initiatePayment from '../utils/paymentUtils';

const Paytm = ({ amount, onPaymentSuccess }) => {
    const handleClick = async () => {
        if (!amount || amount <= 0) {
            alert('Please enter a valid amount before proceeding.');
            return;
        }

        try {
            const paymentResponse = await initiatePayment(amount, 'Paytm');
            if (paymentResponse.success) {
                onPaymentSuccess();
            } else {
                alert('Payment failed: ' + (paymentResponse.error || 'Unknown error occurred'));
            }
        } catch (error) {
            console.error('Error processing Paytm payment:', error);
            alert('Error processing Paytm payment. Please try again.');
        }
    };

    return (
        <button type="button" className="btn btn-light me-2" onClick={handleClick}>
            <img
                src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
                alt="Paytm"
                style={{ width: '100px', height: 'auto' }}
            />
        </button>
    );
};

export default Paytm;
