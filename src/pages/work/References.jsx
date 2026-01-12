import React from 'react';
import Navbar from '../../Navbar';
import PageLayout from '../../components/PageLayout';

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
			<PageLayout title={t.title}>
				<section id="work-references">
					{t.references.map((ref, idx) => (
						<div key={idx} className="mb-8 bg-white/6 rounded-lg shadow p-6">
							<h2 className="text-xl font-semibold mb-2">{ref.name}</h2>
							<p className="mb-1 text-gray-300">{ref.role}</p>
							<p className="mb-1 text-gray-400">☎ {ref.phone}</p>
							<p className="mb-1 text-gray-400">✉ <a href={`mailto:${ref.email}`} className="text-blue-400 underline">{ref.email}</a></p>
						</div>
					))}
				</section>
			</PageLayout>
		</div>
	);
}
