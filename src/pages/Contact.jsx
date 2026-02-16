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
		minHeight: '60vh',
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

	const contactSectionStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '2.5rem',
		textAlign: 'center'
	};

	const formStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '1.5rem',
	};

	const formFieldStyle = {
		width: '100%',
		maxWidth: '22rem',
		textAlign: 'left'
	};

	const buttonContainerStyle = {
		width: '100%',
		maxWidth: '22rem',
		display: 'flex',
		justifyContent: 'center'
	};

	const otherWaysStyle = {
		borderTop: '1px solid rgba(148, 163, 184, 0.3)',
		paddingTop: '2rem',
		width: '100%'
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
						<section id="contact" style={contactSectionStyle}>
							<div>
								<p className="text-slate-400 text-sm sm:text-base max-w-xl">{t.body}</p>
							</div>
						
							<form onSubmit={handleSubmit} style={formStyle}>
								<div style={formFieldStyle}>
									<div className="mb-4">
										<label className="block text-sm font-semibold text-slate-400" htmlFor="name">
											{t.form.name}
										</label>
									</div>
									<input 
										type="text" 
										id="name" 
										name="name" 
										value={form.name} 
										onChange={handleChange} 
										required 
										className="block w-full rounded-lg px-4 py-2 bg-slate-950 border border-slate-700 text-slate-50 placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" 
										placeholder="Jane Smith" 
									/>
								</div>

								<div style={formFieldStyle}>
									<div className="mb-4">
										<label className="block text-sm font-semibold text-slate-400" htmlFor="email">
											{t.form.email}
										</label>
									</div>
									<input 
										type="email" 
										id="email" 
										name="email" 
										value={form.email} 
										onChange={handleChange} 
										required 
										className="block w-full rounded-lg px-4 py-2 bg-slate-950 border border-slate-700 text-slate-50 placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" 
										placeholder="jane@domain.com" 
									/>
								</div>

								<div style={formFieldStyle}>
									<div className="mb-4">
										<label className="block text-sm font-semibold text-slate-400" htmlFor="message">
											{t.form.message}
										</label>
									</div>
									<textarea 
										id="message" 
										name="message" 
										value={form.message} 
										onChange={handleChange} 
										required 
										className="block w-full rounded-lg px-4 py-2 bg-slate-950 border border-slate-700 text-slate-50 placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" 
										rows={4} 
										placeholder="Type your message" 
									/>
								</div>

								<div style={buttonContainerStyle}>
									<button 
										type="submit" 
										disabled={loading} 
										className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-slate-50 font-semibold py-2 px-6 rounded-lg transition"
									>
										<span>{loading ? (language === 'en' ? 'Sending...' : 'Enviando...') : t.form.submit}</span>
									</button>
								</div>

								{submitted && (
									<p className="text-emerald-400 font-medium text-center">
										{language === 'en' ? 'Thank you! Your message has been sent.' : '¡Gracias! Tu mensaje ha sido enviado.'}
									</p>
								)}
								
								{error && (
									<p className="text-red-400 font-medium text-center">{error}</p>
								)}
							</form>

							<div style={otherWaysStyle}>
								<h3 className="text-lg font-semibold text-slate-50 mb-4">{t.other}</h3>
								<ul className="flex flex-col gap-3 text-sm text-slate-400" style={{listStyle: 'none'}}>
									<li>
										<span className="font-medium text-slate-300">{t.direct.email}:</span>{' '}
										<a href="mailto:julianpedrazajf2@gmail.com" className="text-blue-400 hover:text-blue-300 transition">
											julianpedrazajf2@gmail.com
										</a>
									</li>
									<li>
										<span className="font-medium text-slate-300">{t.direct.linkedin}:</span>{' '}
										<a href="https://www.linkedin.com/in/julian-avila-247a09261/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
											LinkedIn
										</a>
									</li>
									<li>
										<span className="font-medium text-slate-300">{t.direct.github}:</span>{' '}
										<a href="https://github.com/julianpedrazajf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
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