import React, { useContext } from 'react';
import { CreditCardContext } from '../context/CreditCardContext';

const Form = () => {
  const { handleChange } = useContext(CreditCardContext);
  return (
    <div className='formContainer'>
      <form>
        <label for='cardNumber'>Card Number</label>
        <input id='cardNumber' type='text' onChange={handleChange} />
        <label for='cardHolder'>Card Holder</label>
        <input id='cardHolder' type='text' />
        <div className='rowContainer'>
          <label>Expiration Date</label>
          <select className='monthSelector'>
            <option value=''>Month</option>
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='03'>03</option>
            <option value='04'>04</option>
            <option value='05'>05</option>
            <option value='06'>06</option>
            <option value='07'>07</option>
            <option value='08'>08</option>
            <option value='09'>09</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select>
          <select className='yearSelector'>
            <option value=''>Year</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
            <option value='2024'>2024</option>
            <option value='2025'>2025</option>
            <option value='2026'>2026</option>
            <option value='2027'>2027</option>
            <option value='2028'>2028</option>
            <option value='2029'>2029</option>
            <option value='2030'>2030</option>
          </select>
          <label for='CVV'>CVV</label>
          <input id='CVV' type='text' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
