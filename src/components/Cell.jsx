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

export const Cell = ({cellData, clickHandler}) => {
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
	console.log('refresh');
	const setValue = () => {
		return cellData.value ? cellData.value : '';
	};
	return (
		<div className={styles.cell} onClick={clickHandler} data-value={setValue()}>
			<img className={styles.square + ' ' + (cellData.cellIndex !== null ? '' : styles.hide)} src={images[cellData.cellIndex]} alt="клетка"/>
			<img className={styles.cross} src={crosses[cellData.crossIndex]} alt="крестик"/>
			<img className={styles.circle} src={circles[cellData.circleIndex]} alt="нолик"/>
		</div>
	);
};
