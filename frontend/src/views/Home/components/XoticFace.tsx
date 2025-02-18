import { useEffect, useRef } from 'react';
import { lerp } from '@utils/lerp';
import { face, leftEye, rightEye, sclera } from '@assets/xotic';
import styles from '../index.module.scss';

const EYE_MOVEMENT_SPEED = 0.04;
const EYE_MOVEMENT_INTENSITY = 30;

export default function XoticFace() {
	const leftEyeRef = useRef<HTMLImageElement>(null);
	const rightEyeRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const leftEyePos = { x: 0, y: 0 };
		const rightEyePos = { x: 0, y: 0 };

		let targetLeftEyePos = { x: 0, y: 0 };
		let targetRightEyePos = { x: 0, y: 0 };

		const onMouseMove = (e: MouseEvent) => {
			const x = e.clientX;
			const y = e.clientY;

			const leftEyeRect = leftEyeRef.current?.getBoundingClientRect();
			const rightEyeRect = rightEyeRef.current?.getBoundingClientRect();

			if (leftEyeRect && rightEyeRect) {
				const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
				const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

				const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
				const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

				const leftEyeAngle = Math.atan2(y - leftEyeCenterY, x - leftEyeCenterX);
				const rightEyeAngle = Math.atan2(y - rightEyeCenterY, x - rightEyeCenterX);

				targetLeftEyePos = {
					x: Math.cos(leftEyeAngle) * EYE_MOVEMENT_INTENSITY,
					y: Math.sin(leftEyeAngle) * EYE_MOVEMENT_INTENSITY
				};

				targetRightEyePos = {
					x: Math.cos(rightEyeAngle) * EYE_MOVEMENT_INTENSITY,
					y: Math.sin(rightEyeAngle) * EYE_MOVEMENT_INTENSITY
				};
			}
		};

		const animate = () => {
			leftEyePos.x = lerp(leftEyePos.x, targetLeftEyePos.x, EYE_MOVEMENT_SPEED);
			leftEyePos.y = lerp(leftEyePos.y, targetLeftEyePos.y, EYE_MOVEMENT_SPEED);

			rightEyePos.x = lerp(rightEyePos.x, targetRightEyePos.x, EYE_MOVEMENT_SPEED);
			rightEyePos.y = lerp(rightEyePos.y, targetRightEyePos.y, EYE_MOVEMENT_SPEED);

			if (leftEyeRef.current) leftEyeRef.current.style.transform = `translate(${leftEyePos.x}px, ${leftEyePos.y}px)`;
			if (rightEyeRef.current) rightEyeRef.current.style.transform = `translate(${rightEyePos.x}px, ${rightEyePos.y}px)`;

			requestAnimationFrame(animate);
		};

		document.addEventListener('mousemove', onMouseMove);
		requestAnimationFrame(animate);

		return () => {
			document.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	return (
		<>
			<div className={styles.xoticFace}>
				<img className={styles.face} src={face} />

				<img ref={leftEyeRef} className={styles.eye} src={leftEye} />
				<img ref={rightEyeRef} className={styles.eye} src={rightEye} />

				<img className={styles.sclera} src={sclera} />
			</div>
		</>
	);
}
