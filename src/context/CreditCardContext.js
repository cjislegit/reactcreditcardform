import React, { createContext, useState } from 'react';

export const CreditCardContext = createContext();

const CreditCardContextProvider = props => {
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '#### #### #### ####',
    cardHolder: 'FULL NAME',
    expirationMonth: 'MM',
    exiprationYear: 'YY',
    cvv: ''
  });

  return (
    <CreditCardContext.Provider
      value={{ ...creditCardInfo, setCreditCardInfo }}
    >
      {props.children}
    </CreditCardContext.Provider>
  );
};

export default CreditCardContextProvider;
