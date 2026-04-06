import { Icon } from '@iconify/react';
import React, { useState } from 'react';

export default function CartAmountToggle({ quantity }) {
  const [amount, setAmount] = useState(quantity);
  const setIncrement = () => {
    setAmount(amount + 1);
  };
  const setDicrement = () => {
    amount > 0 && setAmount(amount - 1);
  };
  return (
    <div className="cs_quantity">
      <button
        className="cs_quantity_button cs_increment"
        onClick={setIncrement}
      >
        <Icon icon="fa:angle-up" />
      </button>
      <span className="cs_quantity_input">{amount}</span>
      <button
        className="cs_quantity_button cs_decrement"
        onClick={setDicrement}
      >
        <Icon icon="fa:angle-down" />
      </button>
    </div>
  );
}
