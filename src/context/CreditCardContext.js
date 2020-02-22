import React, { createContext, useState } from 'react';

export const CreditCardContext = createContext();

const CreditCardContextProvider = props => {
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNuber: '',
    cardHolder: '',
    expirationMonth: '',
    exiprationYear: '',
    cvv: ''
  });

  return (
    <CreditCardContext.Provider value={{ ...createContext, setCreditCardInfo }}>
      {props.children}
    </CreditCardContext.Provider>
  );
};

export default CreditCardContextProvider;
