import React from 'react';

const content = {
	en: {
		title: 'Part-Time & Freelance',
		body: 'Short-term, part-time or freelance projects I have worked on. Include scope, dates and outcomes.'
	},
	es: {
		title: 'Proyectos a Tiempo Parcial y Freelance',
		body: 'Proyectos cortos, a tiempo parcial o freelance en los que he trabajado. Incluye alcance, fechas y resultados.'
	}
};

export default function PartTime({ language = 'en' }) {
	const t = content[language];

	return (
		<main style={{ padding: '2rem' }}>
			<section id="work-parttime">
				<h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.title}</h1>
				<p style={{ marginTop: 12 }}>{t.body}</p>
			</section>
		</main>
	);
}
