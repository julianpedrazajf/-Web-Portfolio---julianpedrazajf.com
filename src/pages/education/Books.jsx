import React from 'react';

const content = {
	en: {
		title: 'Books & Reading',
		body: 'A curated list of books that have influenced my thinking and work. Include brief notes or takeaways for each.'
	},
	es: {
		title: 'Libros y Lecturas',
		body: 'Una lista curada de libros que han influido en mi pensamiento y trabajo. Incluye notas breves o aprendizajes de cada uno.'
	}
};

export default function Books({ language = 'en' }) {
	const t = content[language];

	return (
		<main style={{ padding: '2rem' }}>
			<section id="education-books">
				<h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.title}</h1>
				<p style={{ marginTop: 12 }}>{t.body}</p>
			</section>
		</main>
	);
}
