import * as React from 'react';
import LoanContext from '../context/LoanContext';
import LoanComponent from './LoanComponent';
const loanComponentFields = [
  { name: 'homeLoanAmount', label: 'Home Loan Amount' },
  { name: 'interestRate', label: 'Interest Rate' },
  { name: 'loanTenure', label: 'Loan Tenure' },
];

const LoanComponentGroup: React.FC = () => {
  return (
    <>
      {loanComponentFields.map((field) => (
        <LoanComponent name={field.name} label={field.label} key={field.name} />
      ))}
    </>
  );
};

export default LoanComponentGroup;
