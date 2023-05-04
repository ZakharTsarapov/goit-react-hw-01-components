import transactions from './transactionHistory/transactions.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import friends from './FriendsList/friends.json';
import { FriendList } from './FriendsList/FriendList';
import css from './App.module.css';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';


export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
