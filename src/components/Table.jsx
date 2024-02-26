import { Cell } from "./Cell";
import styles from './tictactoe.module.css';
import { checkWin, checkDraw } from "../utilities/utilities";
import PropTypes from 'prop-types';

export const Table = ({data, update, shape, setShape, winCon, winState, setWinState, gameStart, setGameStart, drawState, setDrawState}) => {
	const clickHandler = (x, y, data) => {
		return () => {
			if (!gameStart && !winState) {
				setGameStart(true);
			}
			if (!data[x][y].value) {
				update((data) => {
					data[x][y].value = shape;
					return data;
				});
			}
			let isDraw = checkDraw(x, y, data, shape);
			let isWin = checkWin(x, y, data, shape, winCon);
			setDrawState(isDraw);
			setWinState(isWin);
			if (gameStart && isWin || isDraw) {
				setGameStart(false);
			}
			if (!isWin) {
				setShape(() => {
					return shape === 'x' ? 'o' : 'x';
				});
			}
		}
	};
	return (
		<div className={styles.field}>
			<div className={styles.table + ' ' + (winState || drawState ? styles.disable : '')} data-size={data.length} data-move={shape}>
				{
					data.map((row, x) =>
						row.map((element, y) => (
							<Cell cellData={data[x][y]} clickHandler={clickHandler(x, y, data)} key={data[x][y].key}></Cell>
						))
					)
				}
			</div>
		</div>
	);
}

Table.propTypes =  {
	data: PropTypes.array,
	update: PropTypes.func,
	shape: PropTypes.string,
	setShape: PropTypes.func,
	winCon: PropTypes.number,
	winState: PropTypes.bool,
	setWinState: PropTypes.func,
	gameStart: PropTypes.bool,
	setGameStart: PropTypes.func,
	drawState: PropTypes.bool,
	setDrawState: PropTypes.func
};
