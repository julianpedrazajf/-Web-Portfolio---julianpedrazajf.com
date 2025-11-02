import React from 'react';

const content = {
	en: {
		title: 'Donations',
		body: 'If you find my work valuable and want to support it, here are the ways you can donate. Thank you for your support.'
	},
	es: {
		title: 'Donaciones',
		body: 'Si encuentras mi trabajo valioso y quieres apoyarlo, aquí están las formas en que puedes donar. Gracias por tu apoyo.'
	}
};

export default function Donations({ language = 'en' }) {
	const t = content[language];

	return (
		<main style={{ padding: '2rem' }}>
			<section id="donations">
				<h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.title}</h1>
				<p style={{ marginTop: 12 }}>{t.body}</p>
			</section>
		</main>
	);
}
