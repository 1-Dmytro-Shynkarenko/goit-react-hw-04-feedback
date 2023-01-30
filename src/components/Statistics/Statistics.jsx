import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total ? (
        <ul>
          <li className={styles.item}>
            <p>
              Good: <span className={styles.value}>{good}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Neutral: <span className={styles.value}>{neutral}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Bad: <span className={styles.value}>{bad}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Total: <span className={styles.value}>{total}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Positive feedback:{' '}
              <span className={styles.value}>{positivePercentage}%</span>
            </p>
          </li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;