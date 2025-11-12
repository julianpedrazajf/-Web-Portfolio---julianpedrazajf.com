import React from 'react';
import Navbar from '../Navbar';

const content = {
	en: {
		title: 'Donations',
		body: 'If you find my work valuable and want to support it, you can donate securely via Stripe or PayPal. Thank you for your support!',
		stripe: {
			label: 'Donate with Card (Stripe Checkout)',
			description: 'Simple, professional experience with Apple Pay / Google Pay support when available.',
			button: 'Donate',
			link: 'https://buy.stripe.com/tu-payment-link'
		},
		paypal: {
			label: 'Prefer PayPal?',
			button: 'Donate with PayPal',
			link: 'https://www.paypal.com/donate?hosted_button_id=TU_ID'
		},
		transparency: 'Donations are 100% voluntary and used to maintain and improve my projects, learn, and share more resources with the community. This section also serves as a functional portfolio: it demonstrates real Stripe and PayPal integration.'
	},
	es: {
		title: 'Donaciones',
		body: 'Si encuentras mi trabajo valioso y quieres apoyarlo, puedes donar de forma segura por Stripe o PayPal. ¡Gracias por tu apoyo!',
		stripe: {
			label: 'Donar con tarjeta (Stripe Checkout)',
			description: 'Experiencia simple y profesional con soporte para Apple Pay / Google Pay cuando esté disponible.',
			button: 'Donar',
			link: 'https://buy.stripe.com/tu-payment-link'
		},
		paypal: {
			label: '¿Prefieres PayPal?',
			button: 'Donar con PayPal',
			link: 'https://www.paypal.com/donate?hosted_button_id=TU_ID'
		},
		transparency: 'Las donaciones son 100% voluntarias y se utilizan para mantener y mejorar mis proyectos, aprender y compartir más recursos con la comunidad. Esta sección también sirve como portafolio funcional: demuestra integración real de Stripe y PayPal.'
	}
};

export default function Donations({ language = 'en' }) {
	const t = content[language];

	return (
		<div>
			<Navbar language={language} />
			<main className="p-8 max-w-xl mx-auto">
				<h1 className="text-3xl font-bold mb-8">{t.title}</h1>
				<section id="donations">
					<p className="mb-6 text-gray-700">{t.body}</p>
					<div className="mb-8 bg-white rounded-lg shadow p-6">
						<h2 className="text-lg font-semibold mb-2">{t.stripe.label}</h2>
						<p className="mb-4 text-gray-700">{t.stripe.description}</p>
						<a href={t.stripe.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg bg-blue-900 text-white font-semibold shadow hover:bg-blue-800 transition">{t.stripe.button}</a>
					</div>
					<div className="mb-8 bg-white rounded-lg shadow p-6">
						<h2 className="text-lg font-semibold mb-2">{t.paypal.label}</h2>
						<a href={t.paypal.link} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-500 transition">{t.paypal.button}</a>
					</div>
					<div className="mb-8 bg-white rounded-lg shadow p-6">
						<h3 className="font-medium mb-2">Transparency</h3>
						<p className="text-gray-700">{t.transparency}</p>
					</div>
				</section>
			</main>
		</div>
	);
}
