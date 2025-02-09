import { Typewriter } from 'react-simple-typewriter';
import logo from '@assets/logo.png';

import './all.scss';

export default function App() {
	return (
		<>
			<div className="section" id="home">
				<div className="text-left">
					<h1 className="home-title">Xotic</h1>

					<div>
						<Typewriter
							words={['Web Developer', 'Blooketer', 'Stewarter']}
							loop={true}
							cursor={true}
						/>
					</div>
				</div>

				<div className="image-right">
					<img src={logo} alt="Description" />
				</div>
			</div>

			<div className="section" id="about">
				<h2>About Me</h2>
				<p>This is the about me section with some text.</p>
			</div>

			<div className="section" id="projects">
				<h2>Projects</h2>
				<p>This is the projects section with some text.</p>
			</div>

			<div className="section" id="contact">
				<h2>Contact</h2>
				<p>This is the contact section with some text.</p>
			</div>
		</>
	);
}
