// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import PhonePay from './Phonepay';
// // import Paytm from './Paytem';
// // import Googlepay from './Googlepay';
// import Razorpay from './Rojapay';

// const Payment = () => {
//     const [amount, setAmount] = useState('');
//     const [error, setError] = useState('');
//     const location = useLocation();
//     const navigate = useNavigate();

//     const { userId, roomId } = location.state || {};

//     const handlePaymentSuccess = () => {
//         alert('Payment successful');
//         navigate('/');
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!roomId || !userId) {
//             setError('User ID or Room ID is missing');
//         } else {
//             setError('');
//         }
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center min-vh-100">
//             <div className="bg-light p-4 rounded shadow-sm">
//                 <div className="d-flex justify-content-center mb-3">
//                     <h2 className="mb-4">Make a Payment</h2>
//                 </div>
//                 {error && <p className="text-danger">{error}</p>}
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label className="form-label">Amount:</label>
//                         <input
//                             type="number"
//                             className="form-control"
//                             placeholder="Enter amount"
//                             value={amount}
//                             onChange={(e) => setAmount(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div className="mb-3">
//                         {/* <PhonePay amount={amount} onPaymentSuccess={handlePaymentSuccess} />
//                         <Paytm amount={amount} onPaymentSuccess={handlePaymentSuccess} />
//                         <Googlepay amount={amount} onPaymentSuccess={handlePaymentSuccess} /> */}
//                         <Razorpay
//                             amount={amount}
//                             userId={userId}
//                             roomId={roomId}
//                             onPaymentSuccess={handlePaymentSuccess}
//                         />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Payment;
