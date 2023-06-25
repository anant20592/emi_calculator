import * as React from 'react';
import LoanContext, { LoanContextI } from '../context/LoanContext';

export interface TextInputProps {
  name: string;
  label: string;
  type: string;
  rangeProps?: any;
}

const TextInput = ({ name, label, type, rangeProps }: TextInputProps) => {
  const { loanObj, setLoanObj } = React.useContext(LoanContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const obj = { ...loanObj, [name]: e.target.value };
    calculateEmi(obj);
  };

  const calculateEmi = (obj: LoanContextI) => {
    const emi =
      ((obj.homeLoanAmount *
        (obj.interestRate / 100) *
        (1 + obj.interestRate / 100)) ^
        obj.loanTenure) /
      ((1 + obj.interestRate / 100) ^ (obj.loanTenure - 1));
    setLoanObj({
      ...obj,
      emi: emi,
      totalPayable: emi * 12 * obj.loanTenure,
      totalInterest: emi * 12 * obj.loanTenure - obj.homeLoanAmount,
    });
  };

  return (
    <>
      {type === 'number' && (
        <div>
          <label htmlFor={name}>{label}</label>
          <input
            type="number"
            value={loanObj?.[name]}
            name={name}
            onChange={handleChange}
          />
        </div>
      )}
      {type === 'range' && (
        <input
          type={'range'}
          name={`range_${name}`}
          value={loanObj?.[name]}
          style={{ width: '100%' }}
          onChange={handleChange}
          {...rangeProps}
        />
      )}
    </>
  );
};

export default TextInput;
