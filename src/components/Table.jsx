import { Cell } from "./Cell";
import styles from './tictactoe.module.css';

export const Table = ({data}) => {
	return (
		<div className={styles.table} data-size={data.length}>
			{
				data.map((row) =>
					row.map((element) => (
						<Cell key={element.key}></Cell>
					))
				)
			}
		</div>
	);
}
