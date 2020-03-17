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
            <span className='num1'>{firstSet[0] ? firstSet[0] : '#'}</span>
            <span className='num2'>{firstSet[1] ? firstSet[1] : '#'}</span>
            <span className='num3'>{firstSet[2] ? firstSet[2] : '#'}</span>
            <span className='num4'>{firstSet[3] ? firstSet[3] : '#'}</span>
          </div>
          <div>
            <span className='num5'>{checkInputSecure(secondSet[0])}</span>
            <span className='num6'>{checkInputSecure(secondSet[1])}</span>
            <span className='num7'>{checkInputSecure(secondSet[2])}</span>
            <span className='num8'>{checkInputSecure(secondSet[3])}</span>
          </div>
          <div>
            <span className='num9'>{checkInputSecure(thirdSet[0])}</span>
            <span className='num10'>{checkInputSecure(thirdSet[1])}</span>
            <span className='num11'>{checkInputSecure(thirdSet[2])}</span>
            <span className='num12'>{checkInputSecure(thirdSet[3])}</span>
          </div>
          <div>
            <span className='num13'>{fourthSet[0] ? fourthSet[0] : '#'}</span>
            <span className='num14'>{fourthSet[1] ? fourthSet[0] : '#'}</span>
            <span className='num15'>{fourthSet[2] ? fourthSet[0] : '#'}</span>
            <span className='num16'>{fourthSet[3] ? fourthSet[0] : '#'}</span>
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
