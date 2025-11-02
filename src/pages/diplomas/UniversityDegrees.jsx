import React from 'react';

const content = {
	en: {
		title: 'University Degrees',
		body: 'Academic degrees earned, institutions and graduation dates. Include thesis titles or major projects if relevant.'
	},
	es: {
		title: 'Títulos Universitarios',
		body: 'Títulos académicos obtenidos, instituciones y fechas de graduación. Incluye títulos de tesis o proyectos principales si aplica.'
	}
};

export default function UniversityDegrees({ language = 'en' }) {
	const t = content[language];

	return (
		<main style={{ padding: '2rem' }}>
			<section id="diplomas-university">
				<h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.title}</h1>
				<p style={{ marginTop: 12 }}>{t.body}</p>
			</section>
		</main>
	);
}
