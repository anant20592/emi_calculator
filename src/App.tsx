import * as React from 'react';
import LoanBreakup from './components/LoanBreakup';
import LoanComponentGroup from './components/LoanComponentGroup';
import LoanContext, { LoanContextI } from './context/LoanContext';
import './style.css';

export interface loanState {
  loanObj: LoanContextI;
  setLoanObj: React.Dispatch<React.SetStateAction<LoanContextI>>;
}
export default function App() {
  const [loanObj, setLoanObj] = React.useState<LoanContextI>({
    homeLoanAmount: 0,
    interestRate: 0,
    loanTenure: 0,
    emi: 0,
    totalInterest: 0,
    totalPayable: 0,
  });

  return (
    <LoanContext.Provider value={{ loanObj, setLoanObj }}>
      <div>
        <h1>EMI Calculator for Home loan</h1>
        <div>
          <LoanComponentGroup />
        </div>
        <LoanBreakup />
      </div>
    </LoanContext.Provider>
  );
}
