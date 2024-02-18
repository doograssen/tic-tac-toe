import { useState } from 'react';
import { Table } from './Table'
import { InfoPanel } from './InfoPanel';
import styles from './tictactoe.module.css';

export const TicTacToe = () => {
	const [size, setSize] = useState(3);
	const dataInit = function (size) {
		let result = [];
		const dump = {
			value: false,
			key: false,
		};
		for (let i = 0; i < size; i++) {
			result.push([]);
			for (let j=0; j < size; j++) {
				result[i].push({...dump, key: String(i) + String(j)});
			}
		}
		console.log(result);
		return result;
	}
	const data = dataInit(size);
	return (
		<div className={styles.game}>
			<InfoPanel size={size} onSetSize={setSize}/>
			<Table data={data}/>
		</div>
	);
};
