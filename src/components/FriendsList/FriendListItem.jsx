import PropTypes from 'prop-types';
import css from './friend.module.css';
import { HiChatBubbleLeftEllipsis } from 'react-icons/hi2';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={css.item}>
        <span className={`${css[isOnline]}`}>
          <HiChatBubbleLeftEllipsis />
        </span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};