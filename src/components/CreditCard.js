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
          <div>
            <span className='upanimation'>{firstSet[0]}</span>
            <span>{firstSet[1]}</span>
            <span>{firstSet[2]}</span>
            <span>{firstSet[3]}</span>
          </div>
          <div>
            <span>{secondSet[0]}</span>
            <span>{secondSet[1]}</span>
            <span>{secondSet[2]}</span>
            <span>{secondSet[3]}</span>
          </div>
          <div>
            <span>{thridSet[0]}</span>
            <span>{thridSet[1]}</span>
            <span>{thridSet[2]}</span>
            <span>{thridSet[3]}</span>
          </div>
          <div>
            <span>{fourthSet[0]}</span>
            <span>{fourthSet[1]}</span>
            <span>{fourthSet[2]}</span>
            <span>{fourthSet[3]}</span>
          </div>
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
