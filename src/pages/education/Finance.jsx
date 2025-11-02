import React from 'react';

const content = {
	en: {
		title: 'Finance & Personal Economics',
		body: 'Notes, resources and insights about finance that I study and apply. Topics may include budgeting, investing and financial planning.'
	},
	es: {
		title: 'Finanzas y Economía Personal',
		body: 'Notas, recursos e ideas sobre finanzas que estudio y aplico. Los temas pueden incluir presupuesto, inversión y planificación financiera.'
	}
};

export default function Finance({ language = 'en' }) {
	const t = content[language];

	return (
		<main style={{ padding: '2rem' }}>
			<section id="education-finance">
				<h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.title}</h1>
				<p style={{ marginTop: 12 }}>{t.body}</p>
			</section>
		</main>
	);
}
