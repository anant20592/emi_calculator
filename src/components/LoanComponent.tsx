import * as React from 'react';
import TextInput, { TextInputProps } from './TextInput';

export interface LoanComponentProps extends TextInputProps {}
const LoanComponent = ({ name, label }: LoanComponentProps) => {
  return (
    <div>
      <TextInput name={name} label={label} />
      <button>5L</button>
      <button>10L</button>
      <button>15L</button>
      <button>20L</button>
      <button>25L</button>
      <button>30L</button>
      <button>35L</button>
    </div>
  );
};

export default LoanComponent;
