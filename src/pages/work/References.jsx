import React from 'react';
import Navbar from '../../Navbar';

const content = {
	en: {
		title: 'Personal References',
		references: [
			{
				name: 'Boris Bayona',
				role: 'IT Lead – Solution Delivery Finance',
				phone: '+61 450 492 922',
				email: 'boris.bayona@gmail.com'
			},
			{
				name: 'Vanessa Avila',
				role: 'Senior Business Process Consultant',
				phone: '+61 417 162 918',
				email: 'vanessa.avila.au@gmail.com'
			}
		]
	},
	es: {
		title: 'Referencias Personales',
		references: [
			{
				name: 'Boris Bayona',
				role: 'Líder de TI – Soluciones Financieras',
				phone: '+61 450 492 922',
				email: 'boris.bayona@gmail.com'
			},
			{
				name: 'Vanessa Avila',
				role: 'Consultora Senior de Procesos de Negocio',
				phone: '+61 417 162 918',
				email: 'vanessa.avila.au@gmail.com'
			}
		]
	}
};

export default function References({ language = 'en' }) {
	const t = content[language];

	return (
		<div>
			<Navbar language={language} />
			<main className="p-8 max-w-2xl mx-auto">
				<h1 className="text-3xl font-bold mb-8">{t.title}</h1>
				<section id="work-references">
					{t.references.map((ref, idx) => (
						<div key={idx} className="mb-8 bg-white rounded-lg shadow p-6">
							<h2 className="text-xl font-semibold mb-2">{ref.name}</h2>
							<p className="mb-1 text-gray-700">{ref.role}</p>
							<p className="mb-1 text-gray-600">☎ {ref.phone}</p>
							<p className="mb-1 text-gray-600">✉ <a href={`mailto:${ref.email}`} className="text-blue-600 underline">{ref.email}</a></p>
						</div>
					))}
				</section>
			</main>
		</div>
	);
}
