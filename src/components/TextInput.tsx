import * as React from 'react';
import LoanContext from '../context/LoanContext';

export interface TextInputProps {
  name: string;
  label: string;
}

const TextInput = ({ name, label }: TextInputProps) => {
  const { loanObj, setLoanObj } = React.useContext(LoanContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoanObj({ ...loanObj, [name]: e.target.value });
  };
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        value={loanObj?.[name]}
        name={name}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default TextInput;
