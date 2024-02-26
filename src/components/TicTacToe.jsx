import { useState } from 'react';
import { Table } from './Table'
import { InfoPanel } from './InfoPanel';
import styles from './tictactoe.module.css';
import { dataInit } from '../utilities/utilities';

export const TicTacToe = () => {
	const INITIAL_TABLE_SIZE = 3;
	const INITIAL_WINCON_VALUE = 3;
	const [size, setSize] = useState(INITIAL_TABLE_SIZE);
	const [winCon, SetWinCondition] = useState(INITIAL_WINCON_VALUE);
	const [shape, setShape] = useState('x');
	const data = dataInit(size);
	const [gameData, setGameData] = useState(data);
	const [winState, setWinState] = useState(false);
	const [drawState, setDrawState] = useState(false);	
	const [gameStartState, setGameStartState] = useState(false);
	return (
		<div className={styles.game}>
			<InfoPanel
				updateField={setGameData}
				size={size}
				onSetSize={setSize}
				winCon={winCon}
				onSetWinCondition={SetWinCondition}
				shape={shape}
				winState={winState}
				setWinState={setWinState}
				drawState={drawState}	
				setDrawState={setDrawState}
				gameStart={gameStartState} />
			<Table
				data={gameData}
				update={setGameData}
				shape={shape}
				setShape={setShape}
				winCon={winCon}
				winState={winState}
				setWinState={setWinState}
				gameStart={gameStartState}
				setGameStart={setGameStartState}
				drawState={drawState}
				setDrawState={setDrawState}/>
		</div>
	);
};
