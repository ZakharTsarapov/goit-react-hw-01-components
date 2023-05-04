import transactions from './transactionHistory/transactions.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import friends from './FriendsList/friends.json';
import { FriendList } from './FriendsList/FriendList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      React homework template
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
