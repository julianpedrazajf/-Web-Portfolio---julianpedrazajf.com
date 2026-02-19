import React from 'react';
import Navbar from '../Navbar';
import PageLayout from '../components/PageLayout';

const content = {
	en: {
		title: 'Donations',
		message: 'The donations section is not currently available.'
	},
	es: {
		title: 'Donaciones',
		message: 'La sección de donaciones no se encuentra habilitada en este momento.'
	}
};

export default function Donations({ language = 'en' }) {
	const t = content[language];

	return (
		<div>
			<Navbar language={language} />
			<PageLayout title={t.title}>
				<section id="donations" style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '40vh',
					textAlign: 'center',
					gap: '1.5rem'
				}}>
					<img 
						src="https://img.icons8.com/?size=100&id=w0nSmTGhdtrR&format=png&color=FFFFFF" 
						alt="Lock icon" 
						style={{
							width: '80px',
							height: '80px',
							opacity: 0.7
						}}
					/>
					<p className="text-slate-400 text-lg" style={{ maxWidth: '500px' }}>
						{t.message}
					</p>
				</section>
			</PageLayout>
		</div>
	);
}
