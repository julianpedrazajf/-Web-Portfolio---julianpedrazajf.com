import React from 'react';

const content = {
	en: {
		title: 'Personal References',
		body: 'Contacts and references from people who can speak about my work and character. Provide names, relationship and contact method.'
	},
	es: {
		title: 'Referencias Personales',
		body: 'Contactos y referencias de personas que pueden hablar sobre mi trabajo y carácter. Proporciona nombres, relación y método de contacto.'
	}
};

export default function References({ language = 'en' }) {
	const t = content[language];

	return (
		<main style={{ padding: '2rem' }}>
			<section id="work-references">
				<h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{t.title}</h1>
				<p style={{ marginTop: 12 }}>{t.body}</p>
			</section>
		</main>
	);
}
