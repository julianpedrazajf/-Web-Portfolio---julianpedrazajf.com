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
			},
			{
				name: 'Vanessa Avila',
				role: 'Senior Business Process Consultant',
				phone: '+61 417 162 918',
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
			},
			{
				name: 'Vanessa Avila',
				role: 'Consultora Senior de Procesos de Negocio',
				phone: '+61 417 162 918',
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
						<React.Fragment key={idx}>
							<div className="mb-8 bg-white/6 rounded-lg shadow p-6">
								<h2 className="text-xl font-semibold mb-2">{ref.name}</h2>
								<p className="mb-1 text-gray-300">{ref.role}</p>
								<p className="mb-1 text-gray-400 flex items-center"> <img className="mr-4" width="20" height="20" src="https://img.icons8.com/material-sharp/24/FFFFFF/phone.png" alt="phone"/> {ref.phone}</p>
							</div>
							{idx < t.references.length - 1 && <div className="section-separator-1000px" aria-hidden="true" />}
						</React.Fragment>
					))}
				</section>
			</PageLayout>
		</div>
	);
}