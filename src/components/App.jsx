import transactions from './transactionHistory/transactions.json';
import TransactionHistory from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      React homework template
      <TransactionHistory items={transactions} />
    </div>
  );
};
