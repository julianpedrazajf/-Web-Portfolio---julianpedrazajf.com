import React from 'react';

const content = {
	en: {
		title: 'Online Bootcamps & Courses',
		body: 'Online courses, bootcamps and certifications I have completed. Include provider, date and a short note about skills gained.'
	},
	es: {
		title: 'Bootcamps y Cursos en Línea',
		body: 'Cursos en línea, bootcamps y certificaciones que he completado. Incluye proveedor, fecha y una breve nota sobre las habilidades adquiridas.'
	}
};

export default function OnlineBootcamps({ language = 'en' }) {
	const t = content[language];

	return (
		<main style={{ padding: '2rem' }}>
			<section id="diplomas-bootcamps">
				<h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.title}</h1>
				<p style={{ marginTop: 12 }}>{t.body}</p>
			</section>
		</main>
	);
}
