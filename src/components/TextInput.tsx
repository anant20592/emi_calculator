import * as React from 'react';
import LoanContext from '../context/LoanContext';

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
    setLoanObj({ ...loanObj, [name]: e.target.value });
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
