import { Tooltip } from 'react-tooltip';
import styles from '../index.module.scss';

export default function Link({ name, link, icon }: LinkProps) {
	return (
		<>
			<Tooltip className={styles.tooltip} id={name} place='top'>{name}</Tooltip>

			<a
				className={styles.link}
				href={link}
				target='_blank'
				data-tooltip-id={name}
			>
				<i className={`${styles.icon} ${icon}`} />
			</a>
		</>
	);
}

interface LinkProps {
	name: string;
	link: string;
	icon: string;
}
