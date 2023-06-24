import { createContext } from 'react';
import { loanState } from '../App';

export interface LoanContextI {
  homeLoanAmount: number;
  interestRate: number;
  loanTenure: number;
  emi: number;
  totalInterest: number;
  totalPayable: number;
}

const LoanContext = createContext<loanState | null>(null);

export default LoanContext;
