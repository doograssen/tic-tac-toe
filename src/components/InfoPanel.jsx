import { Cell } from './Cell';

import styles from './tictactoe.module.css';
import { dataInit } from '../utilities/utilities';

export const InfoPanel = ({updateField, size, onSetSize, winCon, onSetWinCondition, shape, winState }) => {

	const calcSize = (newValue) => {
		if (newValue <= 3) {
			return 3;
		}
		if (newValue >= 5) {
			return 5;
		}
		return newValue;
	};
	const clickHandler = (increment) => {
		onSetSize(calcSize(size + increment));
		updateField(dataInit(calcSize(size + increment)));
	};
  return (
		<div className={styles.panel}>
			<div className={styles.block}>
				<label>Сторона поля:</label>
				<span className={styles.value}>{size}</span>
				<div className={styles.counter}>
					<button className={styles.up} aria-label="больше" onClick={() => clickHandler(1)}>
					</button>
					<button className={styles.down} aria-label="меньше"  onClick={() => clickHandler(-1)}>
					</button>
				</div>
			</div>
			<div className={styles.block}>
				<label>Условие победы:</label>
				<span className={styles.value}>{winCon}</span>
				<div className={styles.counter}>
					<button className={styles.up} aria-label="больше" onClick={() => onSetWinCondition(calcSize(winCon + 1))}>
					</button>
					<button className={styles.down} aria-label="меньше"  onClick={() => onSetWinCondition(calcSize(winCon - 1))}>
					</button>
				</div>
			</div>
			<div className={styles.block}>
				<label> Сейчас ходят:</label>
				<Cell cellData={{value: shape, crossIndex: 1, circleIndex: 1, cellIndex: null}} clickHandler={undefined}></Cell>
			</div>
			<div className={styles.block + ' ' + (!winState ? styles.hide : '')}>
				<label>Победа:</label>
				<Cell cellData={{value: shape, crossIndex: 1, circleIndex: 1, cellIndex: null}} clickHandler={undefined}></Cell>
			</div>
		</div>
  );
};
