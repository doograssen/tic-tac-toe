import cell1 from '../images/cell1.svg';
import cell2 from '../images/cell2.svg';
import cell3 from '../images/cell3.svg';
import cross1 from '../images/cross1.svg';
import cross2 from '../images/cross2.svg';
import cross3 from '../images/cross3.svg';
import cross4 from '../images/cross4.svg';
import circle1 from '../images/circle1.svg';
import circle2 from '../images/circle2.svg';
import circle3 from '../images/circle3.svg';
import circle4 from '../images/circle4.svg';
import styles from './tictactoe.module.css';

export const Cell = ({value, clickHandler}) => {
	const images = [
		cell1, cell2, cell3
	];
	const crosses = [
		cross1,
		cross2,
		cross3,
		cross4,
	];
	const circles = [
		circle1,
		circle2,
		circle3,
		circle4,
	];
	const setValue = () => {
		return value ? value : '';
	};
	return (
		<div className={styles.cell} onClick={clickHandler} data-value={setValue()}>
			<img className={styles.square} src={images[Math.floor(Math.random() * 3)]} alt="клетка"/>
			<img className={styles.cross} src={crosses[Math.floor(Math.random() * 4)]} alt="крестик"/>
			<img className={styles.circle} src={circles[Math.floor(Math.random() * 4)]} alt="нолик"/>
		</div>
	);
};
