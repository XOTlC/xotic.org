import * as Component from './components';
import socials from './socials.json';
import styles from './index.module.scss';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className={styles.madeWith}>
				made with <div className={styles.heart}>❤️</div> by Xotic
			</div>

			<div className={styles.socials}>
				{socials.map((social, index) => <Component.Link
					key={index}
					name={social.name}
					link={social.link}
					icon={social.icon}
				/>)}
			</div>
		</footer>
	);
}
