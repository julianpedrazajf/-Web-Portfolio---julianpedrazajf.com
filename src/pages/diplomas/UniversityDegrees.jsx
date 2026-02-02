import React from 'react';
import Navbar from '../../Navbar';
import PageLayout from '../../components/PageLayout';

const content = {
	en: {
		title: 'University Degrees & Certifications',
		diplomas: [
			{
				institution: 'Greenwich English College',
				program: 'General English Course (Upper Intermediate)',
				graduation: '2023',
				duration: '36 weeks (17 Oct 2022 – 30 Jun 2023)',
				mode: '20 hours/week, face-to-face',
				outcome: 'Certificate of Attainment & Attendance',
				certificate: 'greenwich-english.pdf'
			},
			{
				institution: 'Universidad Nacional de Colombia',
				program: 'Programming Diploma (3 Cycles)',
				graduation: '2022',
				duration: 'Cycle 1: Fundamentals of Programming – 200h (Apr 18 – Jun 12, 2022)\nCycle 2: Basic Programming – 200h (Jun 21 – Aug 14, 2022)\nCycle 3: Software Development – 200h (Aug 16 – Oct 9, 2022)',
				mode: 'Virtual',
				outcome: 'Programming Diploma',
				certificate: 'unal-programming.pdf'
			},
			{
				institution: 'Professional Drawing Academy Foundation',
				program: 'Professional Technical Program in Multimedia Production',
				graduation: '2018',
				duration: '6 semesters (Jul 2016 – Jun 2018)',
				mode: 'In-person (Cali, Colombia)',
				outcome: 'Professional Technical Program in Multimedia Production',
				certificate: 'dibujo-profesional.pdf'
			},
			{
				institution: 'English Access Microscholarship Program',
				program: 'U.S. Embassy & American Columbus Cultural Center',
				graduation: '2015 (Dec 2, 2015)',
				duration: 'Scholarship program',
				mode: 'English language learning',
				outcome: 'Certificate of Achievement',
				certificate: 'access-english.pdf'
			},
			{
				institution: 'Commercial Technical Educational Institution “Simón Rodríguez”',
				program: 'Technical Commercial High School Graduate',
				graduation: '2015 (Nov 29, 2015)',
				duration: 'Secondary education with technical emphasis',
				mode: 'In-person (Cali, Colombia)',
				outcome: 'Technical Commercial High School Graduate',
				certificate: 'simon-rodriguez.pdf'
			}
		]
	},
	es: {
		title: 'Títulos Universitarios y Certificaciones',
		diplomas: [
			{
				institution: 'Greenwich English College',
				program: 'Curso General de Inglés (Intermedio Alto)',
				graduation: '2023',
				duration: '36 semanas (17 Oct 2022 – 30 Jun 2023)',
				mode: '20 horas/semana, presencial',
				outcome: 'Certificado de Logro y Asistencia',
				certificate: 'greenwich-english.pdf'
			},
			{
				institution: 'Universidad Nacional de Colombia',
				program: 'Diplomado en Programación (3 Ciclos)',
				graduation: '2022',
				duration: 'Ciclo 1: Fundamentos de Programación – 200h (18 Abr – 12 Jun 2022)\nCiclo 2: Programación Básica – 200h (21 Jun – 14 Ago 2022)\nCiclo 3: Desarrollo de Software – 200h (16 Ago – 9 Oct 2022)',
				mode: 'Virtual',
				outcome: 'Diplomado en Programación',
				certificate: 'unal-programming.pdf'
			},
			{
				institution: 'Fundación Academia de Dibujo Profesional',
				program: 'Técnico Profesional en Producción Multimedia',
				graduation: '2018',
				duration: '6 semestres (Jul 2016 – Jun 2018)',
				mode: 'Presencial (Cali, Colombia)',
				outcome: 'Técnico Profesional en Producción Multimedia',
				certificate: 'dibujo-profesional.pdf'
			},
			{
				institution: 'Programa Access Microscholarship',
				program: 'Embajada de EE.UU. & Centro Cultural Americano Columbus',
				graduation: '2015 (2 Dic 2015)',
				duration: 'Programa de beca',
				mode: 'Aprendizaje de inglés',
				outcome: 'Certificado de Logro',
				certificate: 'access-english.pdf'
			},
			{
				institution: 'Institución Educativa Técnica Comercial “Simón Rodríguez”',
				program: 'Bachiller Técnico Comercial',
				graduation: '2015 (29 Nov 2015)',
				duration: 'Educación secundaria con énfasis técnico',
				mode: 'Presencial (Cali, Colombia)',
				outcome: 'Bachiller Técnico Comercial',
				certificate: 'simon-rodriguez.pdf'
			}
		]
	}
};

export default function UniversityDegrees({ language = 'en' }) {
	const t = content[language];

	return (
		<div>
			<Navbar language={language} />
			<PageLayout title={t.title}>
				<section id="diplomas-university">
					{t.diplomas.map((diploma, idx) => (
						<React.Fragment key={idx}>
							<div className="mb-10 bg-white/6 rounded-lg shadow p-6">
								<h2 className="text-xl font-semibold mb-2">{diploma.institution}</h2>
								<p className="job-role mb-1 text-gray-300 font-medium">{diploma.program}</p>
								<p className="job-meta mb-1 text-gray-400">{diploma.duration}</p>
								<p className="mb-1 text-gray-400">{diploma.mode}</p>
								<p className="mb-1 text-gray-400">{diploma.outcome}</p>
								<p className="job-meta mb-1 text-gray-400">Graduation: {diploma.graduation}</p>
								{diploma.certificate && (
									<p className="mt-2">
										<a href={`/diplomas/UniversityDegrees/${diploma.certificate}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Certificate</a>
									</p>
								)}
							</div>
							{idx < t.diplomas.length - 1 && <div className="section-separator-1000px" aria-hidden="true" />}
						</React.Fragment>
					))}
				</section>
			</PageLayout>
		</div>
	);
}
