import React from 'react';

const content = {
	en: {
		title: 'Contact',
		body: 'Get in touch via email or social links. Include a short contact form or preferred contact methods here.'
	},
	es: {
		title: 'Contacto',
		body: 'Ponte en contacto por correo electrónico o enlaces sociales. Incluye un formulario corto o los métodos de contacto preferidos aquí.'
	}
};

export default function Contact({ language = 'en' }) {
	const t = content[language];

	return (
		<main style={{ padding: '2rem' }}>
			<section id="contact">
				<h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.title}</h1>
				<p style={{ marginTop: 12 }}>{t.body}</p>
			</section>
		</main>
	);
}
