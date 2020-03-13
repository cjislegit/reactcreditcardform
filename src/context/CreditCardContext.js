import React, { createContext, useState } from 'react';

export const CreditCardContext = createContext();

const CreditCardContextProvider = props => {
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '################',
    cardHolder: 'FULL NAME',
    expirationMonth: 'MM',
    exiprationYear: 'YY',
    cvv: ''
  });

  const handleChange = e => {
    addAnimation();
    const name = e.target.id;
    const value = e.target.value;
    const newState = { ...creditCardInfo };
    newState[name] = value;
    setTimeout(setCreditCardInfo(newState), 50000);
  };

  const addAnimation = () => {
    let num = `num${document.querySelector('#cardNumber').value.length}`;
    let c = document.querySelector(`.${num}`);
    c.className = 'upanimation';
  };

  return (
    <CreditCardContext.Provider
      value={{ ...creditCardInfo, setCreditCardInfo, handleChange }}
    >
      {props.children}
    </CreditCardContext.Provider>
  );
};

export default CreditCardContextProvider;
