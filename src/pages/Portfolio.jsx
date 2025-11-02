import React from 'react';

const content = {
	en: {
		title: 'Portfolio',
		body: 'A selection of my projects, case studies and links. Each project includes a short description, technologies used and a link to the live demo or repo.'
	},
	es: {
		title: 'Portafolio',
		body: 'Una selección de mis proyectos, estudios de caso y enlaces. Cada proyecto incluye una breve descripción, tecnologías utilizadas y un enlace al demo o repositorio.'
	}
};

export default function Portfolio({ language = 'en' }) {
	const t = content[language];

	return (
		<main style={{ padding: '2rem' }}>
			<section id="portfolio">
				<h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.title}</h1>
				<p style={{ marginTop: 12 }}>{t.body}</p>
			</section>
		</main>
	);
}
