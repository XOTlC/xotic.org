import * as Component from './components';
import styles from './index.module.scss';

export default function Home() {
	return (
		<>
			<div className={`${styles.container} ${styles.aboutMeContainer}`}>
				<div className={styles.aboutMeLeft}>
					Hiya, I'm Xotic, a fullstack web and game developer with a passion for clean design and great user experiences. I love building cool projects, refining UX, and bringing ideas to life.
				</div>

				<div className={styles.aboutMeRight}>
					<Component.XoticFace />
				</div>
			</div>
		</>
	);
}
