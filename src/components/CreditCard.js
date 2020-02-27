import React from 'react';

const CreditCard = () => {
  return (
    <div className='creditCardContainer'>
      <div className='creditCard'>
        <div className='chipContainer'></div>
        <div className='logoContainer'></div>
        <div className='numContainer'>8888 8888 8888 8888</div>
        <div className='nameContainer'>
          <span>Card Holder</span>FULL NAME
        </div>
        <div className='expdateContainer'>
          <span>Expires</span>MM/YY
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
