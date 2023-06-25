import * as React from 'react';
import LoanComponent from './LoanComponent';
const loanComponentFields = [
  {
    name: 'homeLoanAmount',
    type: 'text',
    label: 'Home Loan Amount',
    range: { min: 0, max: 20000000, step: 100000, multiplier: 2500000 },
  },
  {
    name: 'interestRate',
    type: 'text',
    label: 'Interest Rate',
    range: { min: 5, max: 20, step: 2.5, multiplier: 2.5 },
  },
  {
    name: 'loanTenure',
    type: 'text',
    label: 'Loan Tenure',
    range: { min: 0, max: 30, step: 5, multiplier: 5 },
  },
];

const LoanComponentGroup: React.FC = () => {
  return (
    <>
      {loanComponentFields.map((field) => (
        <LoanComponent
          name={field.name}
          label={field.label}
          key={field.name}
          rangeProps={field.range}
          type={field.type}
        />
      ))}
    </>
  );
};

export default LoanComponentGroup;
