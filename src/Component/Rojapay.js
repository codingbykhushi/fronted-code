// import React from 'react';
// import axios from 'axios';

// const Razorpay = ({ amount, userId, roomId, onPaymentSuccess }) => {
//     const handleClick = () => {
//         if (!amount || amount <= 0) {
//             alert('Please enter a valid amount before proceeding.');
//             return;
//         }

//         // Load Razorpay script
//         const script = document.createElement('script');
//         script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//         script.async = true;
//         script.onload = () => initiatePayment();
//         document.body.appendChild(script);
//     };

//     const initiatePayment = () => {
//         const options = {
//             key: 'rzp_test_StX0f9E3xLkdGH', // Replace with your Razorpay key ID
//             amount: amount * 100, // Amount in paise
//             currency: 'INR',
//             name: 'Your Company Name',
//             description: 'Room Booking Payment',
//             handler: async function (response) {
//                 // Handle payment success
//                 try {
//                     const { razorpay_payment_id } = response;
//                     if (razorpay_payment_id) {
//                         // Send payment details to backend
//                         await axios.post('http://localhost:4000/api/payment', {
//                             userId,  // Send userId
//                             roomId,  // Send roomId
//                             amount,  // Send amount
//                             razorpayPaymentId: razorpay_payment_id,  // Send Razorpay payment ID
//                         });
//                         onPaymentSuccess();
//                     } else {
//                         alert('Payment failed');
//                     }
//                 } catch (error) {
//                     console.error('Error saving payment:', error);
//                     alert('Payment saving failed');
//                 }
//             },
//             prefill: {
//                 name: 'Customer Name',
//                 email: 'customer@example.com',
//                 contact: '9131800560',
//             },
//             theme: {
//                 color: '#3399cc',
//             },
//         };

//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();
//     };

//     return (
//         <button type="button" className="btn btn-light me-2" onClick={handleClick}>
//             <img
//                 src="https://razorpay.com/favicon.png"
//                 alt="Razorpay"
//                 style={{ width: '100px', height: 'auto' }}
//             />
//         </button>
//     );
// };

// export default Razorpay;
