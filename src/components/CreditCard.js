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
  const thirdSet = cardNumber.substring(8, 12);
  const fourthSet = cardNumber.substring(12, 16);

  const checkInputSecure = i => {
    if (i === undefined || i === '#') {
      return '#';
    } else {
      return '*';
    }
  };

  return (
    <div className='creditCardContainer'>
      <div className='creditCard'>
        <div className='chipContainer'></div>
        <div className='logoContainer'></div>
        <div className='numContainer'>
          <div>
            <span className='upanimation'>
              {firstSet[0] ? firstSet[0] : '#'}
            </span>
            <span>{firstSet[1] ? firstSet[1] : '#'}</span>
            <span>{firstSet[2] ? firstSet[2] : '#'}</span>
            <span>{firstSet[3] ? firstSet[3] : '#'}</span>
          </div>
          <div>
            <span>{checkInputSecure(secondSet[0])}</span>
            <span>{checkInputSecure(secondSet[1])}</span>
            <span>{checkInputSecure(secondSet[2])}</span>
            <span>{checkInputSecure(secondSet[3])}</span>
          </div>
          <div>
            <span>{checkInputSecure(thirdSet[0])}</span>
            <span>{checkInputSecure(thirdSet[1])}</span>
            <span>{checkInputSecure(thirdSet[2])}</span>
            <span>{checkInputSecure(thirdSet[3])}</span>
          </div>
          <div>
            <span>{fourthSet[0] ? fourthSet[0] : '#'}</span>
            <span>{fourthSet[1] ? fourthSet[0] : '#'}</span>
            <span>{fourthSet[2] ? fourthSet[0] : '#'}</span>
            <span>{fourthSet[3] ? fourthSet[0] : '#'}</span>
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
