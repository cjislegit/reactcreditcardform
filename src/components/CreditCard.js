import React, { useContext } from 'react';

import { CreditCardContext } from '../context/CreditCardContext';

const CreditCard = () => {
  const {
    cardHolder,
    cardNumber,
    expirationMonth,
    exiprationYear
  } = useContext(CreditCardContext);

  const firstSet = cardNumber.substring(0, 4);
  const secondSet = cardNumber.substring(4, 8);
  const thridSet = cardNumber.substring(8, 12);
  const fourthSet = cardNumber.substring(12, 16);

  return (
    <div className='creditCardContainer'>
      <div className='creditCard'>
        <div className='chipContainer'></div>
        <div className='logoContainer'></div>
        <div className='numContainer'>
          <div>{firstSet}</div>
          <div>{secondSet}</div>
          <div>{thridSet}</div>
          <div>{fourthSet}</div>
        </div>
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
