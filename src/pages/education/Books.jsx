import React from 'react';
import Navbar from '../../Navbar';
import PageLayout from '../../components/PageLayout';

const content = {
	en: {
		title: 'Books & Reading',
		body: 'A curated list of books that have influenced my thinking and work. Each includes author and key takeaways.',
		books: [
			{
				title: 'The Art of Being Right',
				author: 'Arthur Schopenhauer',
				takeaway: 'Explores 38 rhetorical strategies people use to win arguments, regardless of truth. Highlights manipulation, fallacies, and persuasion techniques—teaching both how to spot them and defend against them.'
			},
			{
				title: 'The Seven Principles for Making Marriage Work',
				author: 'John Gottman, Ph.D.',
				takeaway: 'Offers research-based principles for building strong marriages, including nurturing admiration, managing conflict constructively, turning toward rather than away, and creating shared meaning.'
			},
			{
				title: 'The Rich Method: The Definitive Guide to Getting Money and Success',
				author: 'Richard Gracia & Diego Gracia',
				takeaway: 'Focuses on wealth-building mindset, step-by-step financial planning, and breaking free from limiting beliefs. Emphasizes discipline, investment strategies, and entrepreneurial thinking.'
			},
			{
				title: 'Outwitting the Devil: The Secret to Freedom and Success',
				author: 'Napoleon Hill',
				takeaway: 'Written as a dialogue with the “Devil,” it reveals how fear, procrastination, and conformity enslave people. Encourages self-discipline, independent thinking, and persistence as keys to success.'
			},
			{
				title: 'Breaking the Habit of Being Yourself',
				author: 'Dr. Joe Dispenza',
				takeaway: 'Connects neuroscience and spirituality to show how thoughts shape reality. Provides meditation techniques to reprogram the subconscious, break old patterns, and create new habits aligned with desired outcomes.'
			},
			{
				title: 'Emotional Intelligence: Why It Can Matter More Than IQ',
				author: 'Daniel Goleman',
				takeaway: 'Demonstrates that success in life is largely driven by emotional intelligence—self-awareness, self-regulation, empathy, and social skills—rather than raw IQ.'
			},
			{
				title: 'The Psychology of Money',
				author: 'Morgan Housel',
				takeaway: 'Explains how personal behavior and mindset impact financial success more than technical knowledge. Emphasizes patience, risk management, and long-term thinking over chasing quick gains.'
			},
			{
				title: 'Rich Dad Poor Dad',
				author: 'Robert T. Kiyosaki',
				takeaway: 'Contrasts two financial mindsets—employee vs. investor. Stresses financial literacy, building assets, and entrepreneurship as paths to financial freedom.'
			},
			{
				title: 'The Science of Self-Control: How to Apply It to Problem Solving',
				author: 'Hugo Eduardo Reyes Huerta',
				takeaway: 'Examines self-discipline as a critical factor in decision-making. Provides frameworks for managing impulses, improving focus, and solving problems systematically.'
			},
			{
				title: 'Put el que no lo lea*',
				author: 'Diego Dreyfus',
				takeaway: 'A direct, confrontational guide to personal growth. Challenges readers to face insecurities, embrace authenticity, and take radical responsibility for their lives.'
			},
			{
				title: 'Trading in the Zone',
				author: 'Mark Douglas',
				takeaway: 'Focuses on trading psychology, emphasizing consistency, discipline, and detaching from emotional bias. Teaches how to build confidence in probabilistic thinking.'
			},
			{
				title: 'Think and Grow Rich',
				author: 'Napoleon Hill',
				takeaway: 'A classic on success mindset—belief, persistence, and desire as foundations of achievement. Advocates visualization, affirmations, and goal-setting to manifest wealth.'
			},
			{
				title: 'Sell it to the Mind, Not the People',
				author: 'Jürgen Klaric',
				takeaway: 'Explains neuromarketing principles—how emotions, unconscious triggers, and human psychology drive purchasing decisions. Offers strategies for persuasive communication.'
			},
			{
				title: 'De niño quebrantado a hombre restaurado',
				author: 'Patrick Morley',
				takeaway: 'A faith-based guide to healing and transformation. Encourages confronting past wounds, rebuilding identity through spirituality, and embracing personal responsibility.'
			}
		]
	},
	es: {
		title: 'Libros y Lecturas',
		body: 'Lista curada de libros que han influido en mi pensamiento y trabajo. Cada uno incluye autor y aprendizajes clave.',
		books: [
			{
				title: 'El arte de tener razón',
				author: 'Arthur Schopenhauer',
				takeaway: 'Explora 38 estrategias retóricas que la gente usa para ganar discusiones, sin importar la verdad. Enseña a detectar y defenderse de la manipulación, falacias y técnicas de persuasión.'
			},
			{
				title: 'Los siete principios para hacer que el matrimonio funcione',
				author: 'John Gottman, Ph.D.',
				takeaway: 'Ofrece principios basados en investigación para fortalecer matrimonios: admiración, manejo constructivo de conflictos, acercamiento y creación de significado compartido.'
			},
			{
				title: 'El método Rico: La guía definitiva para conseguir dinero y éxito',
				author: 'Richard Gracia & Diego Gracia',
				takeaway: 'Enfocado en mentalidad de riqueza, planificación financiera paso a paso y romper creencias limitantes. Destaca disciplina, inversión y pensamiento emprendedor.'
			},
			{
				title: 'Más astuto que el Diablo',
				author: 'Napoleon Hill',
				takeaway: 'Revela cómo el miedo, la procrastinación y la conformidad esclavizan. Fomenta autodisciplina, pensamiento independiente y persistencia como claves del éxito.'
			},
			{
				title: 'Deja de ser tú',
				author: 'Dr. Joe Dispenza',
				takeaway: 'Conecta neurociencia y espiritualidad para mostrar cómo los pensamientos crean la realidad. Ofrece técnicas de meditación para reprogramar el subconsciente y crear nuevos hábitos.'
			},
			{
				title: 'Inteligencia emocional: Por qué puede importar más que el coeficiente intelectual',
				author: 'Daniel Goleman',
				takeaway: 'Demuestra que el éxito depende más de la inteligencia emocional—autoconciencia, autorregulación, empatía y habilidades sociales—que del coeficiente intelectual.'
			},
			{
				title: 'La psicología del dinero',
				author: 'Morgan Housel',
				takeaway: 'Explica cómo el comportamiento y la mentalidad influyen en el éxito financiero más que el conocimiento técnico. Destaca paciencia, gestión de riesgos y pensamiento a largo plazo.'
			},
			{
				title: 'Padre Rico, Padre Pobre',
				author: 'Robert T. Kiyosaki',
				takeaway: 'Contrasta dos mentalidades financieras—empleado vs. inversionista. Resalta la educación financiera, construcción de activos y emprendimiento como caminos a la libertad.'
			},
			{
				title: 'La ciencia del autocontrol: Cómo aplicarla a la resolución de problemas',
				author: 'Hugo Eduardo Reyes Huerta',
				takeaway: 'Examina la autodisciplina como factor clave en la toma de decisiones. Ofrece marcos para gestionar impulsos, mejorar el enfoque y resolver problemas sistemáticamente.'
			},
			{
				title: 'Put el que no lo lea*',
				author: 'Diego Dreyfus',
				takeaway: 'Guía directa y confrontativa para el crecimiento personal. Reta a enfrentar inseguridades, abrazar la autenticidad y asumir responsabilidad radical.'
			},
			{
				title: 'Trading en la zona',
				author: 'Mark Douglas',
				takeaway: 'Enfocado en psicología del trading: consistencia, disciplina y desapego emocional. Enseña a pensar en probabilidades y construir confianza.'
			},
			{
				title: 'Piense y hágase rico',
				author: 'Napoleon Hill',
				takeaway: 'Clásico sobre mentalidad de éxito: creencia, persistencia y deseo como bases del logro. Promueve visualización, afirmaciones y metas para manifestar riqueza.'
			},
			{
				title: 'Véndelo a la mente, no a la gente',
				author: 'Jürgen Klaric',
				takeaway: 'Explica principios de neuromarketing: emociones, disparadores inconscientes y psicología humana en decisiones de compra. Ofrece estrategias de comunicación persuasiva.'
			},
			{
				title: 'De niño quebrantado a hombre restaurado',
				author: 'Patrick Morley',
				takeaway: 'Guía espiritual para sanar y transformar. Motiva a enfrentar heridas, reconstruir identidad y asumir responsabilidad personal.'
			}
		]
	}
};

export default function Books({ language = 'en' }) {
	const t = content[language];

	return (
		<div>
			<Navbar language={language} />
			<PageLayout title={t.title}>
				<section id="education-books">
					<p className="mb-8 text-gray-300">{t.body}</p>
					{t.books.map((book, idx) => (
						<React.Fragment key={idx}>
							<div className="mb-8 bg-white/6 rounded-lg shadow p-6">
								<h2 className="text-xl font-semibold mb-2">{book.title}</h2>
								<p className="mb-1 text-gray-300 font-medium">{book.author}</p>
								<p className="mb-1 text-gray-300">{book.takeaway}</p>
							</div>
							{idx < t.books.length - 1 && <div className="section-separator-1000px" aria-hidden="true" />}
						</React.Fragment>
					))}
				</section>
			</PageLayout>
		</div>
	);
}
