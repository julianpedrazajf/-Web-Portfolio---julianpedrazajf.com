import React from 'react';

const content = {
	en: {
		title: 'Full-Time Positions',
		body: 'Here you can list my full-time roles, responsibilities and highlights. Add companies, dates and a brief description for each position.'
	},
	es: {
		title: 'Puestos a Tiempo Completo',
		body: 'Aquí puedes ver mis roles a tiempo completo, responsabilidades y logros. Añade empresas, fechas y una breve descripción de cada puesto.'
	}
};

export default function FullTime({ language = 'en' }) {
	const t = content[language];

	return (
		<main style={{ padding: '2rem' }}>
			<section id="work-fulltime">
				<h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.title}</h1>
				<p style={{ marginTop: 12 }}>{t.body}</p>
			</section>
		</main>
	);
}
