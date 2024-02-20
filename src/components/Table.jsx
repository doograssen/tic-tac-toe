import { Cell } from "./Cell";
import styles from './tictactoe.module.css';
import { checkWin } from "../utilities/utilities";

export const Table = ({data, update, shape, setShape, winCon, winState, setWinState}) => {

	const clickHandler = (x, y, data) => {
		return () => {
			if (!data[x][y].value) {
				update((data) => {
					data[x][y].value = shape;
					return data;
				});
			}
			let isWin = checkWin(x, y, data, shape, winCon);
			setWinState(isWin);
			if (!isWin) {
				setShape(() => {
					return shape === 'x' ? 'o' : 'x';
				});
			}
		}
	};
	return (
		<div className={styles.table + ' ' + (winState ? styles.disable : '')} data-size={data.length} data-move={shape}>
			{
				data.map((row, x) =>
					row.map((element, y) => (
						<Cell cellData={data[x][y]} clickHandler={clickHandler(x, y, data)} key={data[x][y].key}></Cell>
					))
				)
			}
		</div>
	);
}
