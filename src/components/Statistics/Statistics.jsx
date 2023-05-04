import PropTypes from 'prop-types';
import { getRandomHexColor } from './randomHex';

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2>{title}</h2>}

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            class="item"
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      parcentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
