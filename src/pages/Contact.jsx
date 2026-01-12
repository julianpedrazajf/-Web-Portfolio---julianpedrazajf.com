import React, { useState } from 'react';
import Navbar from '../Navbar';

const content = {
	en: {
		title: 'Contact',
		body: 'Fill out the form below and I’ll get back to you as soon as possible.',
		form: {
			name: 'Name',
			email: 'Email',
			message: 'Message',
			submit: 'Submit'
		},
		other: 'Other Ways to Reach Out',
		direct: {
			email: 'Direct Email',
			linkedin: 'LinkedIn',
			github: 'GitHub'
		}
	},
	es: {
		title: 'Contacto',
		body: 'Completa el formulario y te responderé lo antes posible.',
		form: {
			name: 'Nombre',
			email: 'Correo electrónico',
			message: 'Mensaje',
			submit: 'Enviar'
		},
		other: 'Otras formas de contacto',
		direct: {
			email: 'Correo directo',
			linkedin: 'LinkedIn',
			github: 'GitHub'
		}
	}
};

import PageLayout from '../components/PageLayout';

export default function Contact({ language = 'en' }) {
	const t = content[language];
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [submitted, setSubmitted] = useState(false);

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		setSubmitted(true);
		// Here you could integrate with a backend or service like Formspree
	}

	return (
		<div>
			<Navbar language={language} />
			<PageLayout title={t.title}>
				<section id="contact">
					<p className="mb-6 text-gray-300">{t.body}</p>
					<form onSubmit={handleSubmit} className="mb-10 bg-white/6 rounded-lg shadow p-6">
						<div className="mb-4">
							<label className="block font-medium mb-1" htmlFor="name">{t.form.name}</label>
							<input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="w-full border rounded px-3 py-2 bg-transparent" />
						</div>
						<div className="mb-4">
							<label className="block font-medium mb-1" htmlFor="email">{t.form.email}</label>
							<input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2 bg-transparent" />
						</div>
						<div className="mb-4">
							<label className="block font-medium mb-1" htmlFor="message">{t.form.message}</label>
							<textarea id="message" name="message" value={form.message} onChange={handleChange} required className="w-full border rounded px-3 py-2 bg-transparent" rows={4} />
						</div>
						<button type="submit" className="px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-600 transition">{t.form.submit}</button>
						{submitted && <p className="mt-4 text-green-500 font-medium">{language === 'en' ? 'Thank you! Your message has been sent.' : '¡Gracias! Tu mensaje ha sido enviado.'}</p>}
					</form>
					<div className="mb-8 bg-white/6 rounded-lg shadow p-6">
						<h2 className="text-lg font-semibold mb-2">{t.other}</h2>
						<ul className="list-none">
							<li className="mb-2"><span className="font-medium">{t.direct.email}:</span> <a href="mailto:julianpedrazajf2@gmail.com" className="text-blue-400 underline">julianpedrazajf2@gmail.com</a></li>
							<li className="mb-2"><span className="font-medium">{t.direct.linkedin}:</span> <a href="https://www.linkedin.com/in/julian-avila-247a09261/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">LinkedIn</a></li>
							<li><span className="font-medium">{t.direct.github}:</span> <a href="https://github.com/julianpedrazajf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">GitHub</a></li>
						</ul>
					</div>
				</section>
			</PageLayout>
		</div>
	);
}
