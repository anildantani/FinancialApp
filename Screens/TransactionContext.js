// TransactionContext.js
import React, { createContext, useState } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, name: 'UnderArmour', amount: 100.00, location: 'London', date: 'March 24, 2024'},
    { id: 2, name: 'Emirates', amount: 2000.00, location: 'Dubai', date: 'Dec 10, 2023'},
    { id: 3, name: 'Take Sushi', amount: 150.00, location: 'Huron St', date: 'Feb 25, 2024'},
    { id: 4, name: 'Burgar King', amount: 50.00, location: 'Oxford St', date: 'Feb 19, 2024'},
    { id: 5, name: 'Zara', amount: 125.00, location: 'White oaks', date: 'Jan 23, 2024'},
    
  ]);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
