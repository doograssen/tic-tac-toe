import resetImg from '../images/reload.svg';
import styles from './tictactoe.module.css';
import PropTypes from 'prop-types';

export const Reset = ({reset}) => {
	return (
		<button className={styles.reload} onClick={reset} title="reset">
			<img className={styles.reset} src={resetImg} alt="reset"/>
		</button>
	);
}

Reset.propTypes = {
	reset: PropTypes.func
};
