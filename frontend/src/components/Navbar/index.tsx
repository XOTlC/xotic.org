import { Typewriter } from 'react-simple-typewriter';
import words from './words.json';
import logo from '@assets/logo.png';
import styles from './index.module.scss';

export default function Navbar() {
	return (
		<header className='navbar'>
			<div className={styles.me}>
				<div className={styles.meImage}>
					<img
						src={logo}
						draggable={false}
						alt='xotic logo'
					/>
				</div>

				<div className={styles.meText}>
					<div className={styles.name}>Xotic</div>
					<div className={styles.subtitle}>
						<Typewriter
							words={words}
							cursor={true}
							loop={true}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
