import { Cell } from './Cell';
import { Control } from "./Control";
import styles from './tictactoe.module.css';
import { dataInit } from '../utilities/utilities';
import PropTypes from 'prop-types';

export const InfoPanel = ({updateField, size, onSetSize, winCon, onSetWinCondition, shape, winState, setWinState, drawState, setDrawState, gameStart }) => {
	const MAX_TABLE_SIZE = 10;
	const MAX_WINCON = 5;
	const MIN_WINCON = 3;
	const calcSize = (newValue, max, min) => {
		if (newValue <= min) {
			return min;
		}
		if (newValue >= max) {
			return max;
		}
		return newValue;
	};
	const clickSizeHandler = (increment) => {
		const newSize = calcSize(size + increment, MAX_TABLE_SIZE, winCon);
		if (newSize === size) return false;
		onSetSize(newSize);
		updateField(dataInit(newSize));
		if (winState) {
			setWinState(false);
		}
		if (drawState) {
			setDrawState(false);
		}
	};
	const clickWinconHandler = (increment) => {
		onSetWinCondition(calcSize(winCon + increment, MAX_WINCON > size ? size : MAX_WINCON, MIN_WINCON))
		if (winState) {
			setWinState(false);
		}
		if (drawState) {
			setDrawState(false);
		}
	};
  return (
		<div className={styles.panel}>
			<Control title="Сторона поля" value={size} handler={clickSizeHandler} gameStart={gameStart}/>
			<Control title="Условие победы:" value={winCon} handler={clickWinconHandler} gameStart={gameStart}/>
			<div className={styles.block}>
				<label> Сейчас ходят:</label>
				<Cell cellData={{value: shape, crossIndex: 1, circleIndex: 1, cellIndex: null}} clickHandler={undefined}></Cell>
			</div>
			{ winState &&
					<div className={styles.block}>
						<label>Победа:</label>
						<Cell cellData={{value: shape, crossIndex: 1, circleIndex: 1, cellIndex: null}} clickHandler={undefined}></Cell>
					</div>}
			{ drawState &&
					<div className={styles.block + ' ' + (!drawState ? styles.hide : '')}>
						<label>Ничья!!!</label>
					</div>}
		</div>
  );
};

InfoPanel.propTypes = {
	updateField: PropTypes.func,
	size: PropTypes.number,
	onSetSize: PropTypes.func,
	winCon: PropTypes.number,
	onSetWinCondition: PropTypes.func,
	shape: PropTypes.string,
	winState: PropTypes.bool,
	setWinState: PropTypes.func,
	drawState: PropTypes.bool,
	setDrawState: PropTypes.func,
	gameStart: PropTypes.bool,
};
