import { Cell } from "./Cell";
import styles from './tictactoe.module.css';

export const Table = ({data, update, shape, setShape}) => {

	const clickHandler = (x, y, data) => {
		return () => {
			if (!data[x][y].value) {
				update((data) => {
					data[x][y].value = shape;
					return(data);
				});
			}
			setShape(() => {
				return shape === 'x' ? 'o' : 'x';
			});
		}
	};
	return (
		<div className={styles.table} data-size={data.length} data-move={shape}>
			{
				data.map((row, x) =>
					row.map((element, y) => (
						<Cell key={element.key} value={data[x][y].value} clickHandler={clickHandler(x, y, data)}></Cell>
					))
				)
			}
		</div>
	);
}
