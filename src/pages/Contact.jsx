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
		gap: '1.7rem',
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
		borderTop: '0.5px solid rgba(148, 163, 184, 0.3)',
		paddingTop: '0.5rem',
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
									<label className="block text-white text-lg font-medium" htmlFor="name">
										{t.form.name}
									</label>
									<input 
										type="text" 
										id="name" 
										name="name" 
										value={form.name} 
										onChange={handleChange} 
										required 
										style={{
											width: '100%',
											background: 'transparent',
											border: '1px solid #FFFFFF1F',
											borderRadius: '0.5rem',
											padding: '0.75rem 1rem',
											color: '#cbd5e1',
											fontSize: '1rem',
											transition: 'all 200ms',
										marginTop: '0.5rem',
										}}
										onFocus={(e) => {
											e.target.style.outline = 'none';
											e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.12)';
											e.target.style.borderColor = 'transparent';
										}}
										onBlur={(e) => {
											e.target.style.boxShadow = 'none';
											e.target.style.borderColor = '#FFFFFF1F';
										}}
										placeholder="John Carter" 
									/>
								</div>

								<div style={formFieldStyle}>
									<label className="block text-white text-lg font-medium" htmlFor="email">
										{t.form.email}
									</label>
									<input 
										type="email" 
										id="email" 
										name="email" 
										value={form.email} 
										onChange={handleChange} 
										required 
										style={{
											width: '100%',
											background: 'transparent',
											border: '1px solid #FFFFFF1F',
											borderRadius: '0.5rem',
											padding: '0.75rem 1rem',
											color: '#cbd5e1',
											fontSize: '1rem',
											transition: 'all 200ms',
											marginTop: '0.5rem',
										}}
										onFocus={(e) => {
											e.target.style.outline = 'none';
											e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.12)';
											e.target.style.borderColor = 'transparent';
										}}
										onBlur={(e) => {
											e.target.style.boxShadow = 'none';
											e.target.style.borderColor = '#FFFFFF1F';
										}}
										placeholder="you@example.com" 
									/>
								</div>

								<div style={formFieldStyle}>
									<label className="block text-white text-lg font-medium" htmlFor="message">
										{t.form.message}
									</label>
									<textarea 
										id="message" 
										name="message" 
										value={form.message} 
										onChange={handleChange} 
										required 
										style={{
											width: '100%',
											background: 'transparent',
											border: '1px solid #FFFFFF1F',
											borderRadius: '0.5rem',
											padding: '0.75rem 1rem',
											color: '#cbd5e1',
											fontSize: '1rem',
											transition: 'all 200ms',
											resize: 'none',
											marginTop: '0.5rem',
										}}
										onFocus={(e) => {
											e.target.style.outline = 'none';
											e.target.style.boxShadow = '0 0 0 2px rrgba(255, 255, 255, 0.12)';
											e.target.style.borderColor = 'transparent';
										}}
										onBlur={(e) => {
											e.target.style.boxShadow = 'none';
											e.target.style.borderColor = '#FFFFFF1F';
										}}
										rows={4} 
										placeholder="Type your message" 
									/>
								</div>

								<div style={buttonContainerStyle}>
									<div style={{
										background: 'linear-gradient(90deg, #C33726, #F4A223, #F2C24C, #8A1E14)',
										borderRadius: '40px',
										padding: '1px',
										width: '100%'
									}}>
										<button 
											type="submit" 
											disabled={loading} 
											style={{
												width: '100%',
												background: '#2A2A2A',
												backdropFilter: 'blur(10px) brightness(1.1)',
												border: 'none',
												borderRadius: '36px',
												padding: '0.875rem 1.5rem',
												color: '#fff',
												fontSize: '1rem',
												fontWeight: '500',
												cursor: loading ? 'not-allowed' : 'pointer',
												transition: 'all 200ms',
												opacity: loading ? 0.6 : 1,
											}}
											onMouseOver={(e) => {
												if (!loading) {
													e.currentTarget.style.background = '#3f3f3f';
												}
											}}
											onMouseOut={(e) => {
												e.currentTarget.style.background = '#2A2A2A';
												e.currentTarget.style.transform = 'translateY(0)';
											}}
										>
											<span>{loading ? (language === 'en' ? 'Sending...' : 'Enviando...') : t.form.submit}</span>
										</button>
									</div>
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
										<a href="mailto:julianpedrazajf2@gmail.com" className="underline transition-colors duration-200" style={{ color: '#FF004D' }} onMouseOver={e => (e.currentTarget.style.color = '#FFD700')} onMouseOut={e => (e.currentTarget.style.color = '#FF004D')}>
											julianpedrazajf2@gmail.com
										</a>
									</li>
									<li>
										<span className="font-medium text-slate-300">{t.direct.linkedin}:</span>{' '}
										<a href="https://www.linkedin.com/in/julian-avila-247a09261/" target="_blank" rel="noopener noreferrer" className="underline transition-colors duration-200" style={{ color: '#34D399' }} onMouseOver={e => (e.currentTarget.style.color = '#FFD700')} onMouseOut={e => (e.currentTarget.style.color = '#34D399')}>
											LinkedIn
										</a>
									</li>
									<li>
										<span className="font-medium text-slate-300">{t.direct.github}:</span>{' '}
										<a href="https://github.com/julianpedrazajf" target="_blank" rel="noopener noreferrer" className="underline transition-colors duration-200" style={{ color: '#34D399' }} onMouseOver={e => (e.currentTarget.style.color = '#FFD700')} onMouseOut={e => (e.currentTarget.style.color = '#34D399')}>
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