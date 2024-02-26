import styles from './tictactoe.module.css';

export const Controll = ({ title, value, handler, gameStart}) => {
  return (
    <div className={styles.block}>
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