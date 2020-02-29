import React, { useContext } from 'react';

import { CreditCardContext } from '../context/CreditCardContext';

const CreditCard = () => {
  const {
    cardHolder,
    cardNumber,
    expirationMonth,
    exiprationYear
  } = useContext(CreditCardContext);

  return (
    <div className='creditCardContainer'>
      <div className='creditCard'>
        <div className='chipContainer'></div>
        <div className='logoContainer'></div>
        <div className='numContainer'>{cardNumber}</div>
        <div className='nameContainer'>
          <span>Card Holder</span>
          {cardHolder}
        </div>
        <div className='expdateContainer'>
          <span>Expires</span>
          {expirationMonth}/{exiprationYear}
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
