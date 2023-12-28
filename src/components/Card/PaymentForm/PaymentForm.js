
import Navbar from '../../Navbar/Navbar';
import './PaymentForm.css';
import React, { useState } from 'react';
import showToast from 'crunchy-toast';


const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [ammount, setAmmount] = useState ('');
  const [product, setProduct] = useState('');

  const handlePayment = () => {
    // Save payment details to local storage
    localStorage.setItem('paymentDetails', JSON.stringify({ cardNumber, expiryDate, cvv,ammount,product }));
    if (handlePayment)
    {
        showToast('Payment Successfull', 'success', 3000);
    }

      window.location.href="/"
   
    
  };

  return (
    <div>
        <Navbar/>
        <div className='payment-container'>
            <h2 className='text-center'>Payment Form</h2>
            <form>
                <label>
                Card Number:
                <input type="text" value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className='input-text' placeholder='Ex. 123456789'/>
                </label>
                <br />

                <label>
                Product Name:
                <input type="text" value={product}
                onChange={(e) => setProduct(e.target.value)}
                className='input-text'placeholder='product name' />
                </label>
                <br/>
                <label>
                Ammount:
                <input type="text" value={ammount}
                onChange={(e) => setAmmount(e.target.value)}
                className='input-text' placeholder='total amount' />
                </label>

                <br/>
                <label>
                Expiry Date:
                <input type="text" value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className='input-text' placeholder='Ex. 10/29' />
                </label>
                <br />
                <label>
                CVV:
                <input type="text" value={cvv}
                 onChange={(e) => setCvv(e.target.value)} 
                 className='input-text' placeholder='Ex. 458'/>
                </label>
                <br />
                <button type="button" onClick={handlePayment} className='signup-btn'>
                Submit Payment
                </button>
            </form>

        </div>
    </div>
  );
};

export default PaymentForm;
