import * as React from 'react';
import LoanContext from '../context/LoanContext';

const LoanBreakup = () => {
  const {loanObj, setLoanObj} = React.useContext(LoanContext);
  console.log(loanObj)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h3>Loan Emi</h3>
        <p>{loanObj.emi}</p>
      </div>
      <div>
        <h3>Total Interest payable</h3>
        <p>{loanObj.totalInterest}</p>
      </div>
      <div>
        <h3>Total Payment (Principal + Interest)</h3>
        <p>{loanObj.totalPayable}</p>
      </div>
    </div>
  );
};

export default LoanBreakup;
