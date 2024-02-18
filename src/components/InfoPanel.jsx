import styles from './tictactoe.module.css';

export const InfoPanel = ({ size, onSetSize }) => {

	const calcSize = (newValue) => {
		if (newValue <= 3) {
			return 3;
		}
		if (newValue >= 5) {
			return 5;
		}
		return newValue;
	};
  return (
		<div className={styles.panel}>
			<div className={styles.block}>
				<label>Сторона поля:</label>
				<span className={styles.value}>{size}</span>
				<div className={styles.counter}>
					<button className={styles.up} aria-label="больше" onClick={() => onSetSize(calcSize(size + 1))}>
					</button>
					<button className={styles.down} aria-label="меньше"  onClick={() => onSetSize(calcSize(size - 1))}>
					</button>
				</div>
			</div>
			<div className={styles.block}>
				<label>Условие победы:</label>
				<span className={styles.value}>3</span>
				<div className={styles.counter}>
					<button className={styles.up} aria-label="больше" onClick={() => onSetSize(calcSize(size + 1))}>
					</button>
					<button className={styles.down} aria-label="меньше"  onClick={() => onSetSize(calcSize(size - 1))}>
					</button>
				</div>
			</div>
		</div>
  );
};
