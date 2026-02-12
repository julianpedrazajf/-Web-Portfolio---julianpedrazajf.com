import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../Navbar';
import PageLayout from '../components/PageLayout';

const content = {
	en: {
		title: 'Contact',
		body: "Fill out the form below and I'll get back to you as soon as possible.",
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

export default function Contact({ language = 'en' }) {
	const t = content[language];
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		emailjs.init('MYBMiQ_pdUt5qiFRu');
	}, []);

	const containerStyle = {
		display: 'flex',
		justifyContent: 'center',
		minHeight: '70vh',
		width: '100%',
		position: 'relative',
		zIndex: 1
	};

	const cardStyle = {
		background: '#2a2a2a',
		border: '1px solid rgba(255, 255, 255, 0.1)',
		boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
		padding: '2rem',
		borderRadius: '2rem',
		width: '100%',
		maxWidth: '36rem',
		backdropFilter: 'blur(20px)',
		textAlign: 'center'
	};

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		setError(null);

		const templateParams = {
			to_email: 'julianpedrazajf2@gmail.com',
			user_name: form.name,
			user_email: form.email,
			message: form.message
		};

		emailjs.send('service_gi9pgew', 'template_4qkbb6k', templateParams)
			.then((response) => {
				console.log('Success:', response.status, response.text);
				setSubmitted(true);
				setForm({ name: '', email: '', message: '' });
				setLoading(false);
				setTimeout(() => setSubmitted(false), 5000);
			})
			.catch((error) => {
				console.error('Failed:', error);
				setError(language === 'en' ? 'Error sending message. Please try again.' : 'Error al enviar el mensaje. Intenta de nuevo.');
				setLoading(false);
			});
	}

	return (
		<div>
			<Navbar language={language} />
			<PageLayout title={t.title}>
				<div style={containerStyle}>
					<div style={cardStyle}>
						<section id="contact" className="flex flex-col items-center gap-10 text-center">
							<p className="text-slate-600 text-sm sm:text-base max-w-xl">{t.body}</p>
						
							<form onSubmit={handleSubmit} className="mb-12 w-full flex flex-col items-center gap-6">
								<div className="w-full max-w-md mx-auto text-left">
									<label className="block text-sm font-semibold text-slate-400 mb-3" htmlFor="name">
										{t.form.name}
									</label>
									<input 
										type="text" 
										id="name" 
										name="name" 
										value={form.name} 
										onChange={handleChange} 
										required 
										className="block w-full rounded-2xl px-4 py-3 bg-white text-slate-700 placeholder:text-slate-400 border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30" 
										placeholder="Jane Smith" 
									/>
								</div>

								<div className="w-full max-w-md mx-auto text-left">
									<label className="block text-sm font-semibold text-slate-400 mb-3" htmlFor="email">
										{t.form.email}
									</label>
									<input 
										type="email" 
										id="email" 
										name="email" 
										value={form.email} 
										onChange={handleChange} 
										required 
										className="block w-full rounded-2xl px-4 py-3 bg-white text-slate-700 placeholder:text-slate-400 border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30" 
										placeholder="jane@domain.com" 
									/>
								</div>

								<div className="w-full max-w-md mx-auto text-left">
									<label className="block text-sm font-semibold text-slate-400 mb-3" htmlFor="message">
										{t.form.message}
									</label>
									<textarea 
										id="message" 
										name="message" 
										value={form.message} 
										onChange={handleChange} 
										required 
										className="block w-full rounded-2xl px-4 py-3 bg-white text-slate-700 placeholder:text-slate-400 border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30" 
										rows={4} 
										placeholder="Type your message" 
									/>
								</div>

								<div className="w-full max-w-md mx-auto flex justify-center">
									<button 
										type="submit" 
										disabled={loading} 
										className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
									>
										<span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white text-lg">
											→
										</span>
										<span>
											{loading ? (language === 'en' ? 'Sending...' : 'Enviando...') : (language === 'en' ? 'Get a Solution' : 'Enviar')}
										</span>
									</button>
									
									{submitted && (
										<p className="mt-4 text-emerald-600 font-medium">
											{language === 'en' ? 'Thank you! Your message has been sent.' : '¡Gracias! Tu mensaje ha sido enviado.'}
										</p>
									)}
									
									{error && (
										<p className="mt-4 text-red-500 font-medium">{error}</p>
									)}
								</div>
							</form>

							<div className="border-t border-slate-200 pt-8">
								<h2 className="text-base font-semibold text-slate-700 mb-3">{t.other}</h2>
								<ul className="list-none text-sm text-slate-600" style={{listStyle: 'none'}}>
									<li className="mb-2">
										<span className="font-medium">{t.direct.email}:</span>{' '}
										<a href="mailto:julianpedrazajf2@gmail.com" className="text-blue-600 underline">
											julianpedrazajf2@gmail.com
										</a>
									</li>
									<li className="mb-2">
										<span className="font-medium">{t.direct.linkedin}:</span>{' '}
										<a href="https://www.linkedin.com/in/julian-avila-247a09261/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
											LinkedIn
										</a>
									</li>
									<li>
										<span className="font-medium">{t.direct.github}:</span>{' '}
										<a href="https://github.com/julianpedrazajf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
											GitHub
										</a>
									</li>
								</ul>
							</div>
						</section>
					</div>
				</div>
			</PageLayout>
		</div>
	);
}
