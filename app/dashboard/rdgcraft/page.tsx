'use client';

import { findMaxPossibleSumeOfContiguousBalances } from "@/app/lib/data";
import React, { useState } from 'react';

const buttonStyle = {
  backgroundColor: '#4CAF50', // Green background
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '4px', // Rounded corners
};

const Page = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    // Parse the input string to an array of numbers
    const array = input.split(',').map(Number);
  
    // Check if the array length is within the constraints
    if (array.length <= 3 || array.length >= 10**5) {
      alert('The number of account balances must be more than 3 and less than 100,000.');
      return;
    }
  
    // Check if each account balance is within the constraints
    if (array.some(balance => balance <= -1000 || balance >= 1000)) {
      alert('Each account balance must be greater than -1000 and less than 1000.');
      return;
    }
  
    // Proceed if all constraints are met
    const maxSum = findMaxPossibleSumeOfContiguousBalances(array);
    setResult(maxSum);
  };

  return (
    <div>
      <h1>Max Sum of Contiguous Balances</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers separated by commas"
      />
      <br />
      <button onClick={handleSubmit} style={buttonStyle}>Calculate Max Sum</button>
      {result !== null && <p>Max Possible Sum of Contiguous Balances: {result}</p>}
    </div>
  );
};

export default Page;