import { useState } from 'react';
import { Table } from './Table'
import { InfoPanel } from './InfoPanel';
import styles from './tictactoe.module.css';
export const dataInit = (size) => {
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
	return result;
};

export const TicTacToe = () => {
	const [size, setSize] = useState(3);
	const [winCon, SetWinCondition] = useState(3);
	const [shape, setShape] = useState('x');
	const data = dataInit(size);
	const [gameData, setGameData] = useState(data);
	return (
		<div className={styles.game}>
			<InfoPanel updateField={setGameData} size={size} onSetSize={setSize} winCon={winCon} onSetWinCondition={SetWinCondition} />
			<Table data={gameData} update={setGameData}  shape={shape} setShape={setShape} />
		</div>
	);
};
