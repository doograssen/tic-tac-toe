import styles from './tictactoe.module.css';
import PropTypes from 'prop-types';

export const Control = ({ title, value, handler, gameStart}) => {
  return (
    <div className={styles.block + ' ' + styles.control}>
      <label>{title}</label>
      <span className={styles.value}>{value}</span>
      <div className={styles.counter + ' ' + (gameStart ? styles.hide : '')}>
        <button className={styles.up} aria-label="больше" onClick={() => handler(1)}>
        </button>
        <button className={styles.down} aria-label="меньше"  onClick={() => handler(-1)}>
        </button>
      </div>
    </div>
  );
}

Control.propTypes = {
	title: PropTypes.string,
	value: PropTypes.number,
	handler: PropTypes.func,
	gameStart: PropTypes.bool,
};
