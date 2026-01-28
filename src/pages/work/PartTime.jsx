import React from 'react';
import Navbar from '../../Navbar';
import PageLayout from '../../components/PageLayout';

const content = {
	en: {
		title: 'Part-Time & Freelance',
		grilld: {
			company: "Grill'd Burgers",
			role: 'Team Member',
			duration: 'October 2022 – December 2022',
			location: 'Dee Why, NSW, Australia',
			description: 'Worked across multiple areas of the restaurant including cooking, cleaning, food preparation, staff coordination, and assisting with opening and closing procedures.',
			skills: 'Food preparation, customer service, teamwork, time management, staff coordination, cleaning and hygiene standards'
		},
		haircut: {
			company: "Julian Haircut Services",
			role: 'Freelance Barber',
			duration: '2021 – Present',
			location: 'Sydney, Australia',
			description: 'Provided haircut services to private clients, managing appointments and delivering tailored grooming experiences. Developed strong interpersonal skills while ensuring high standards of quality, customer satisfaction, and consistency over three years of practice in Australia.',
			skills: 'Haircutting, customer service, attention to detail, time management, client relationship management, adaptability'
		},
		trader: {
			company: 'Independent Futures Trader',
			role: 'Day Trader — E-mini S&P 500 Futures',
			duration: '2020 – Present',
			location: 'Sydney, Australia (Remote Trading)',
			description: 'Actively trade the E-mini S&P 500 futures using technical and fundamental analysis to identify short-term market opportunities. Operate through NinjaTrader with expertise in charting, order execution, and real-time risk management. Manage personal capital and funded accounts, following strict risk management and position sizing rules.',
			skills: 'Futures trading, technical & fundamental analysis, NinjaTrader platform, risk management, capital allocation, market research'
		},
		investor: {
			company: 'Independent Investor',
			role: 'Long-Term Investor — Index Funds & Equities',
			duration: '2024 – Present',
			location: 'Sydney, Australia',
			description: 'Build wealth through long-term investments in diversified index funds and selected equities. Focused on disciplined contributions, diversification, fundamental analysis, and alignment with long-term financial goals.',
			skills: 'Investing, portfolio management, diversification, fundamental analysis'
		}
	},
	es: {
		title: 'Proyectos a Tiempo Parcial y Freelance',
		grilld: {
			company: "Grill'd Burgers",
			role: 'Miembro del equipo',
			duration: 'Octubre 2022 – Diciembre 2022',
			location: 'Dee Why, NSW, Australia',
			description: 'Trabajé en varias áreas del restaurante incluyendo cocina, limpieza, preparación de alimentos, coordinación de personal y apoyo en los procedimientos de apertura y cierre.',
			skills: 'Preparación de alimentos, servicio al cliente, trabajo en equipo, gestión del tiempo, coordinación de personal, estándares de limpieza e higiene'
		},
		haircut: {
			company: 'Julian Haircut Services',
			role: 'Barbero Freelance',
			duration: '2021 – Presente',
			location: 'Sydney, Australia',
			description: 'Presté servicios de corte de cabello a clientes particulares, gestionando citas y entregando experiencias de arreglo personal a medida. Desarrollé habilidades interpersonales sólidas y mantuve altos estándares de calidad y satisfacción del cliente.',
			skills: 'Corte de cabello, servicio al cliente, atención al detalle, gestión del tiempo, gestión de relaciones con clientes, adaptabilidad'
		},
		trader: {
			company: 'Trader Independiente de Futuros',
			role: 'Day Trader — E-mini S&P 500 Futures',
			duration: '2020 – Presente',
			location: 'Sydney, Australia (Trading Remoto)',
			description: 'Opero activamente con futuros E-mini S&P 500 aplicando análisis técnico y fundamental para identificar oportunidades en movimientos de corto plazo. Uso NinjaTrader con experiencia en gráficos, ejecución de órdenes y gestión de riesgo en tiempo real, siguiendo reglas estrictas de gestión del riesgo y dimensionamiento de posiciones.',
			skills: 'Trading de futuros, análisis técnico y fundamental, plataforma NinjaTrader, gestión del riesgo, asignación de capital, investigación de mercados'
		},
		investor: {
			company: 'Inversor Independiente',
			role: 'Inversor a Largo Plazo — Fondos Indexados y Acciones',
			duration: '2024 – Presente',
			location: 'Sydney, Australia',
			description: 'Construyo patrimonio mediante inversiones a largo plazo en fondos indexados diversificados y acciones seleccionadas, con contribuciones disciplinadas y un perfil de riesgo moderado.',
			skills: 'Inversión, gestión de cartera, diversificación, análisis fundamental'
		}
	}
};

export default function PartTime({ language = 'en' }) {
	const t = content[language];

	return (
		<div>
			<Navbar language={language} />
			<PageLayout title={t.title}>
				   {/* Grill'd Burgers */}
				   <section className="mb-12 bg-white/6 rounded-lg shadow-lg p-6 space-y-4 border-b border-gray-600">
					   <h2 className="text-2xl font-semibold !text-accent mb-6 pb-4 border-b-2 border-accent">{t.grilld.company}</h2>
					   <p className="job-role mb-6">{t.grilld.role}</p>
					   <p className="text-gray-400 job-meta mb-6">{t.grilld.duration} | {t.grilld.location}</p>
					   <p className="text-gray-300 mb-6">{t.grilld.description}</p>
					   <div className="mb-6">
						   <h3 className="font-medium mb-2">Skills:</h3>
						   <p className="text-gray-300">{t.grilld.skills}</p>
					   </div>
				   </section>

				<div className="section-separator-1000px" aria-hidden="true" />

				   {/* Julian Haircut Services */}
				   <section className="mb-12 bg-white/6 rounded-lg shadow-lg p-6 space-y-4 border-b border-gray-600">
					   <h2 className="text-2xl font-semibold !text-accent mb-6 pb-4 border-b-2 border-accent">{t.haircut.company}</h2>
					   <p className="job-role mb-6">{t.haircut.role}</p>
					   <p className="text-gray-400 job-meta mb-6">{t.haircut.duration} | {t.haircut.location}</p>
					   <p className="text-gray-300 mb-6">{t.haircut.description}</p>
					   <div className="mb-6">
						   <h3 className="font-medium mb-2">Skills:</h3>
						   <p className="text-gray-300">{t.haircut.skills}</p>
					   </div>
				   </section>

				<div className="section-separator-1000px" aria-hidden="true" />

				   {/* Independent Futures Trader */}
				   <section className="mb-12 bg-white/6 rounded-lg shadow-lg p-6 space-y-4 border-b border-gray-600">
					   <h2 className="text-2xl font-semibold !text-accent mb-6 pb-4 border-b-2 border-accent">{t.trader.company}</h2>
					   <p className="job-role mb-6">{t.trader.role}</p>
					   <p className="text-gray-400 job-meta mb-6">{t.trader.duration} | {t.trader.location}</p>
					   <p className="text-gray-300 mb-6">{t.trader.description}</p>
					   <div className="mb-6">
						   <h3 className="font-medium mb-2">Skills:</h3>
						   <p className="text-gray-300">{t.trader.skills}</p>
					   </div>
				   </section>

				<div className="section-separator-1000px" aria-hidden="true" />

				   {/* Independent Investor */}
				   <section className="mb-12 bg-white/6 rounded-lg shadow-lg p-6 space-y-4 border-b border-gray-600">
					   <h2 className="text-2xl font-semibold !text-accent mb-6 pb-4 border-b-2 border-accent">{t.investor.company}</h2>
					   <p className="job-role mb-6">{t.investor.role}</p>
					   <p className="text-gray-400 job-meta mb-6">{t.investor.duration} | {t.investor.location}</p>
					   <p className="text-gray-300 mb-6">{t.investor.description}</p>
					   <div className="mb-6">
						   <h3 className="font-medium mb-2">Skills:</h3>
						   <p className="text-gray-300">{t.investor.skills}</p>
					   </div>
				   </section>
			</PageLayout>
		</div>
	);
}
