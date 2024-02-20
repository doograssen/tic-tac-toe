import { useState } from 'react';
import { Table } from './Table'
import { InfoPanel } from './InfoPanel';
import styles from './tictactoe.module.css';
import { dataInit } from '../utilities/utilities';

export const TicTacToe = () => {
	const [size, setSize] = useState(3);
	const [winCon, SetWinCondition] = useState(3);
	const [shape, setShape] = useState('x');
	const data = dataInit(size);
	const [gameData, setGameData] = useState(data);
	const [winState, setWinState] = useState(false);
	return (
		<div className={styles.game}>
			<InfoPanel
				updateField={setGameData}
				size={size}
				onSetSize={setSize}
				winCon={winCon}
				onSetWinCondition={SetWinCondition}
				shape={shape}
				winState={winState} />
			<Table
				data={gameData}
				update={setGameData}
				shape={shape}
				setShape={setShape}
				winCon={winCon}
				winState={winState}
				setWinState={setWinState}/>
		</div>
	);
};
