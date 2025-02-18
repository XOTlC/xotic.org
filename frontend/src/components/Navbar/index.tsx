import { Typewriter } from 'react-simple-typewriter';
import words from './words.json';
import links from './links.json';
import logo from '@assets/logo.png';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

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

			<nav className={styles.nav}>
				{links.map((link, i) => (
					<div className={styles.navLink} key={i}>
						<Link
							to={link.link}
						>
							{link.name}
						</Link>

						<i className={link.icon} />
					</div>
				))}
			</nav>

			<div className={styles.hamburger}>
				<i className='fas fa-bars' />
			</div>
		</header>
	);
}
