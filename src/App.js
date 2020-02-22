import React from 'react';

import CreditCard from '../src/components/CreditCard';
import Form from '../src/components/Form';

import CreditCardContextProvider from './context/CreditCardContext';

function App() {
  return (
    <div className='App'>
      <CreditCardContextProvider>
        <CreditCard />
        <Form />
      </CreditCardContextProvider>
    </div>
  );
}

export default App;
