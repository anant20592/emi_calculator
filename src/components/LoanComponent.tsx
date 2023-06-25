import * as React from 'react';
import TextInput, { TextInputProps } from './TextInput';

export interface LoanComponentProps extends TextInputProps {}
interface SliderProps {
  value: number;
  label: string;
}
const LoanComponent = ({ name, label, rangeProps }: LoanComponentProps) => {
  const [rangeArr, setRangeArr] = React.useState<SliderProps[]>([]);

  React.useEffect(() => {
    let arr: SliderProps[] = [];
    let i = rangeProps?.min;
    while (i <= rangeProps?.max) {
      if (name === 'homeLoanAmount') {
        arr.push({ value: i, label: `${i / 100000}L` });
      } else {
        arr.push({ value: i, label: i });
      }
      i = i + rangeProps?.multiplier;
    }
    setRangeArr([...arr]);
  }, []);
  return (
    <div>
      <TextInput name={name} label={label} type={'number'} />
      <TextInput
        name={name}
        label={label}
        type={'range'}
        rangeProps={rangeProps}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {rangeArr.map((slider) => (
          <p key={slider.value}>{slider.label}</p>
        ))}
      </div>
    </div>
  );
};

export default LoanComponent;
