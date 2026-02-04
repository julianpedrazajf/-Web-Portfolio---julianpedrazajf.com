import React from 'react';
import Navbar from '../../Navbar';
import PageLayout from '../../components/PageLayout';

const content = {
	en: {
		title: 'Finance & Personal Economics',
		body: 'Notes, resources and insights about finance that I study and apply. Topics include trading, investing, and financial planning.',
		sections: [
			{
				heading: 'Day Trading Academy (DTA)',
				description: 'One year of training specialized in futures trading, price action strategies, and trading psychology.',
				strategies: [
					'Price Action Trading: Reading market structure, momentum, and order flow without relying on indicators.',
					'Risk Management: Strict rules for capital allocation, stop-loss placement, and consistency in execution.',
					'Active Trading: Application of DTA methodology to the E-mini S&P 500 futures market through NinjaTrader.'
				],
				knowledge: [
					'Strong focus on discipline, patience, and trader psychology as the foundation for consistent results.',
					'Practical expertise in technical analysis (trend identification, key levels, support/resistance).',
					'Understanding of market dynamics and how professional traders interpret volume and order flow.',
					'Development of a structured daily routine for analysis, execution, and review of trades.'
				]
			},
			{
				heading: 'Learn to Invest (YouTube – Juan David V)',
				description: 'Self-directed training in index fund investing and company analysis for stock selection.',
				strategies: [
					'Moderate Portfolio Model: Balanced allocation across large-cap equities, small-cap equities, international equities, and fixed income instruments.',
					'Fundamental Analysis of Companies: Focus on profitability, efficiency, financial health, and valuation before investing.',
					'Key Indicators: Profitability (Net Margin, ROIC), Growth (EPS growth, long-term earnings growth), Valuation (P/E, P/B), Debt (Quick ratio, Debt-to-Equity), Dividends (Yield, Payout Ratio).',
					'Financial Tools Utilized: NinjaTrader, Investing, TradingView, Yahoo Finance, Finviz, Morningstar, Google Finance, Gurufocus, Tipranks.',
					'Consistency: Emphasis on companies with a sustained growth history, always compared to peers in the same industry.'
				],
				knowledge: [
					'Ability to design diversified and balanced portfolios aligned with a moderate risk profile.',
					'Skills to analyze financial statements and key ratios related to profitability, valuation, debt, and dividends.',
					'Practical application of return and profit formulas to measure investment performance.',
					'Disciplined approach to identifying entry points, tracking prices, and documenting investment decisions.',
					'Deeper understanding of the relationship between company value, growth, and expected return.'
				]
			}
		]
	},
	es: {
		title: 'Finanzas y Economía Personal',
		body: 'Notas, recursos e ideas sobre finanzas que estudio y aplico. Incluye trading, inversión y planificación financiera.',
		sections: [
			{
				heading: 'Day Trading Academy (DTA)',
				description: 'Un año de formación especializada en trading de futuros, estrategias de acción del precio y psicología del trading.',
				strategies: [
					'Trading con Acción del Precio: Lectura de estructura de mercado, momentum y flujo de órdenes sin depender de indicadores.',
					'Gestión de Riesgo: Reglas estrictas para asignación de capital, stop-loss y consistencia en la ejecución.',
					'Trading Activo: Aplicación de la metodología DTA al mercado de futuros E-mini S&P 500 usando NinjaTrader.'
				],
				knowledge: [
					'Enfoque fuerte en disciplina, paciencia y psicología del trader como base de resultados consistentes.',
					'Experiencia práctica en análisis técnico (identificación de tendencias, niveles clave, soportes y resistencias).',
					'Comprensión de la dinámica de mercado y cómo los traders profesionales interpretan volumen y flujo de órdenes.',
					'Desarrollo de una rutina diaria estructurada para análisis, ejecución y revisión de operaciones.'
				]
			},
			{
				heading: 'Aprende a Invertir (YouTube – Juan David V)',
				description: 'Formación autodidacta en inversión en fondos indexados y análisis de empresas para selección de acciones.',
				strategies: [
					'Modelo de Portafolio Moderado: Asignación equilibrada entre acciones de gran capitalización, pequeña capitalización, internacionales y renta fija.',
					'Análisis Fundamental de Empresas: Enfoque en rentabilidad, eficiencia, salud financiera y valoración antes de invertir.',
					'Indicadores Clave: Rentabilidad (Margen Neto, ROIC), Crecimiento (EPS, crecimiento de ganancias), Valoración (P/E, P/B), Deuda (Ratio rápido, Deuda/Patrimonio), Dividendos (Rendimiento, Payout Ratio).',
					'Herramientas Financieras: NinjaTrader, Investing, TradingView, Yahoo Finance, Finviz, Morningstar, Google Finance, Gurufocus, Tipranks.',
					'Consistencia: Énfasis en empresas con historial de crecimiento sostenido, siempre comparadas con sus pares del sector.'
				],
				knowledge: [
					'Capacidad para diseñar portafolios diversificados y equilibrados alineados con un perfil de riesgo moderado.',
					'Habilidades para analizar estados financieros y ratios clave de rentabilidad, valoración, deuda y dividendos.',
					'Aplicación práctica de fórmulas de retorno y beneficio para medir desempeño de inversiones.',
					'Enfoque disciplinado para identificar puntos de entrada, seguimiento de precios y documentación de decisiones de inversión.',
					'Comprensión profunda de la relación entre valor de empresa, crecimiento y retorno esperado.'
				]
			}
		]
	}
};

export default function Finance({ language = 'en' }) {
	const t = content[language];

	return (
		<div>
			<Navbar language={language} />
			<PageLayout title={t.title} description={t.body}>
				<section id="education-finance">
					{t.sections.map((section, idx) => (
						<React.Fragment key={idx}>
							<div className="mb-12 bg-white/6 rounded-lg shadow-lg p-8">
								<h2 className="text-2xl font-semibold !text-accent mb-6 pb-4 border-b-2 border-accent">{section.heading}</h2>
								<p className="mb-6 text-gray-300 font-medium text-base leading-relaxed">{section.description}</p>
								<div className="space-y-6">
									<div>
										<h3 className="font-semibold text-lg mb-3 text-gray-100">Strategies Learned:</h3>
										<ul className="space-y-2 text-gray-300" style={{listStyle: 'none'}}>
											{section.strategies.map((s, i) => <li key={i} className="leading-relaxed flex items-start"><span className="mr-3">•</span><span>{s}</span></li>)}
										</ul>
									</div>
									<div>
										<h3 className="font-semibold text-lg mb-3 text-gray-100">Knowledge Gained:</h3>
										<ul className="space-y-2 text-gray-300" style={{listStyle: 'none'}}>
											{section.knowledge.map((k, i) => <li key={i} className="leading-relaxed flex items-start"><span className="mr-3">•</span><span>{k}</span></li>)}
										</ul>
									</div>
								</div>
							</div>
							{idx < t.sections.length - 1 && <div className="section-separator-1000px" aria-hidden="true" />}
						</React.Fragment>
					))}
				</section>
			</PageLayout>
		</div>
	);
}
