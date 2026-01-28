import React from 'react';
import Navbar from '../Navbar';

const content = {
	en: {
		title: 'Portfolio',
		projects: [
			{
				name: 'Weather Time',
				description: 'A web application developed during my Diploma of IT (Front End Web Development) at ACBI. The app shows real-time weather, date, and time for user-selected cities, featuring customizable settings for temperature units, brightness, text size, and sound.',
				tools: 'React.js, JavaScript, HTML, CSS, OpenWeatherMap API',
				github: 'https://github.com/julianpedrazajf/WeatherAppReactACBIProject',
				demo: 'https://julianpedrazajf.github.io/WeatherAppReactACBIProject/'
			},
			{
				name: 'Practical JavaScript Videogames (Workshop)',
				description: 'A vanilla-JavaScript browser game built for a practical workshop. It introduces core programming concepts by creating a 2D functional and adaptable game using the HTML5 canvas. Players can control a character, detect collisions, manage lives, scores, and records — turning basic JavaScript logic into an interactive experience.',
				tools: 'JavaScript (ES6), HTML, CSS, Canvas API',
				github: 'https://github.com/julianpedrazajf/26-taller-practico-javascript-videogames',
				demo: 'https://julianpedrazajf.github.io/26-taller-practico-javascript-videogames/'
			}
		]
	},
	es: {
		title: 'Portafolio',
		projects: [
			{
				name: 'Weather Time',
				description: 'Aplicación web desarrollada durante mi Diploma de IT (Desarrollo Front End) en ACBI. Muestra el clima, fecha y hora en tiempo real para ciudades seleccionadas por el usuario, con opciones de personalización para unidades de temperatura, brillo, tamaño de texto y sonido.',
				tools: 'React.js, JavaScript, HTML, CSS, OpenWeatherMap API',
				github: 'https://github.com/julianpedrazajf/WeatherAppReactACBIProject',
				demo: 'https://julianpedrazajf.github.io/WeatherAppReactACBIProject/'
			},
			{
				name: 'Videojuegos Prácticos en JavaScript (Taller)',
				description: 'Juego de navegador en JavaScript puro creado para un taller práctico. Introduce conceptos básicos de programación creando un juego 2D funcional y adaptable usando el canvas de HTML5. Los jugadores pueden controlar un personaje, detectar colisiones, gestionar vidas, puntajes y récords, convirtiendo la lógica básica de JavaScript en una experiencia interactiva.',
				tools: 'JavaScript (ES6), HTML, CSS, Canvas API',
				github: 'https://github.com/julianpedrazajf/26-taller-practico-javascript-videogames',
				demo: 'https://julianpedrazajf.github.io/26-taller-practico-javascript-videogames/'
			}
		]
	}
};

import PageLayout from '../components/PageLayout';

export default function Portfolio({ language = 'en' }) {
	const t = content[language];

	return (
		<div>
			<Navbar language={language} />
			<PageLayout title={t.title}>
				<section id="portfolio">
					{t.projects.map((proj, idx) => (
						<React.Fragment key={idx}>
							<div className="mb-10 bg-white/6 rounded-lg shadow p-6">
								<h2 className="text-xl font-semibold mb-2">{proj.name}</h2>
								<p className="mb-2 text-gray-300">{proj.description}</p>
								<p className="mb-2 text-gray-400"><strong>Tools:</strong> {proj.tools}</p>
								<div className="mb-4 flex flex-col gap-0 mt-2">
								  <div className="mb-4">
									<a
									  href={proj.github}
									  target="_blank"
									  rel="noopener noreferrer"
									  className="underline transition-colors duration-200"
									  style={{ color: '#FF004D' }}
									  onMouseOver={e => (e.currentTarget.style.color = '#FFD700')}
									  onMouseOut={e => (e.currentTarget.style.color = '#FF004D')}
									>
									  GitHub Link
									</a>
								  </div>
								  <a
									href={proj.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="underline transition-colors duration-200"
									style={{ color: '#34D399' }}
									onMouseOver={e => (e.currentTarget.style.color = '#FFD700')}
									onMouseOut={e => (e.currentTarget.style.color = '#34D399')}
								  >
									Live Demo Link
								  </a>
								</div>
							</div>
							{idx < t.projects.length - 1 && <div className="section-separator-1000px" aria-hidden="true" />}
						</React.Fragment>
					))}
				</section>
			</PageLayout>
		</div>
	);
}
