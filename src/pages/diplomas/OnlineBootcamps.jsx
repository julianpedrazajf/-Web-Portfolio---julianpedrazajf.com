import React from 'react';
import Navbar from '../../Navbar';
import PageLayout from '../../components/PageLayout';

const content = {
	en: {
		title: 'Online Bootcamps & Courses',
		bootcamps: [
			{
				platform: 'Crehana',
				course: 'Illustration',
				certification: 'Official Certificate of the Program of Illustration',
				date: 'September 2019',
				certificate: '4._degree_diploma_Illustration_Program_Co.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Basic Computing',
				certification: 'Online Certificate of Completion (Basic Computing Course)',
				date: 'October 4, 2022',
				certificate: 'diploma-computacion-basica.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Logical Thinking: Algorithms and Flowcharts',
				certification: 'Online Certificate of Completion',
				date: 'November 27, 2022',
				certificate: 'diploma-pensamiento-logico.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Logical Thinking: Functions and Control Structures',
				certification: 'Online Certificate of Completion',
				date: 'June 2, 2023',
				certificate: 'diploma-pensamiento-logico-estructuras.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Logical Thinking: Programming Languages',
				certification: 'Online Certificate of Completion',
				date: 'June 4, 2023',
				certificate: 'diploma-pensamiento-logico-lenguajes.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Basic Programming',
				certification: 'Online Certificate of Completion',
				date: 'June 28, 2023',
				certificate: 'diploma-pensamiento-logico-lenguajes.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Development Environment Setup in Windows',
				certification: 'Online Certificate of Completion',
				date: 'July 18, 2023',
				certificate: 'diploma-configuracion-windows.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Fundamentals of Software Engineering',
				certification: 'Online Certificate of Completion',
				date: 'July 6, 2023',
				certificate: 'diploma-ingenieria.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Introduction to the Terminal and Command Line',
				certification: 'Online Certificate of Completion',
				date: 'July 23, 2023',
				certificate: 'diploma-terminal.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Professional Course in Git and GitHub',
				certification: 'Online Certificate of Completion',
				date: 'August 14, 2023',
				certificate: 'diploma-git-github.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Modern Development Workflow with CodeStream',
				certification: 'Online Certificate of Completion',
				date: 'August 23, 2023',
				certificate: 'diploma-desarrollo-moderno-codestream.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Technology for Managers and Directors',
				certification: 'Online Certificate of Completion',
				date: 'September 5, 2023',
				certificate: 'diploma-tecnologia-gerentes.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Introduction to the Web: History and Functioning of the Internet',
				certification: 'Online Certificate of Completion',
				date: 'June 30, 2023',
				certificate: 'diploma-introweb.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Design for Programmers',
				certification: 'Online Certificate of Completion',
				date: 'February 16, 2024',
				certificate: 'diploma-diseno-programadores.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Frontend Developer',
				certification: 'Online Certificate of Completion',
				date: 'January 2, 2024',
				certificate: 'diploma-frontend-developer.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Practical Frontend Developer',
				certification: 'Online Certificate of Completion',
				date: 'January 16, 2024',
				certificate: 'diploma-frontend-developer-practico.pdf',
				github: 'https://github.com/julianpedrazajf/Frontend-Developer-Practical-Course'
			},
			{
				platform: 'Platzi',
				course: 'Practical HTML and CSS',
				certification: 'Online Certificate of Completion',
				date: 'January 24, 2024',
				certificate: 'diploma-html-practico.pdf',
				github: 'https://github.com/julianpedrazajf/Practical-HTML-and-CSS-Course'
			},
			{
				platform: 'Platzi',
				course: 'Responsive Design: Mobile-First Layout',
				certification: 'Online Certificate of Completion',
				date: 'February 13, 2024',
				certificate: 'diploma-mobile-first.pdf',
				github: 'https://github.com/julianpedrazajf/Responsive-Design-Course-Mobile-First'
			},
			{
				platform: 'Platzi',
				course: 'Design Systems',
				certification: 'Online Certificate of Completion',
				date: 'February 20, 2024',
				certificate: 'diploma-sistemas-diseno.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Basic CSS Grid',
				certification: 'Online Certificate of Completion',
				date: 'March 7, 2024',
				certificate: 'diploma-css-grid.pdf',
				github: 'https://github.com/julianpedrazajf/Basic-CSS-Grid-Course'
			},
			{
				platform: 'Platzi',
				course: 'Practical CSS Layout',
				certification: 'Online Certificate of Completion',
				date: 'March 17, 2024',
				certificate: 'diploma-practico-css.pdf',
				github: 'https://github.com/julianpedrazajf/Practical-CSS-Layout-Course'
			},
			{
				platform: 'Platzi',
				course: 'Professional CSS Grid Layout',
				certification: 'Online Certificate of Completion',
				date: 'April 2, 2024',
				certificate: 'diploma-css-grid-layout.pdf'
			},
			{
				platform: 'Platzi',
				course: 'CSS Transformations and Transitions',
				certification: 'Online Certificate of Completion',
				date: 'April 15, 2024',
				certificate: 'diploma-transformaciones-transiciones-css.pdf',
				github: 'https://github.com/julianpedrazajf/22-CSS-Transformations-and-Transitions-Course'
			},
			{
				platform: 'Platzi',
				course: 'Practical JavaScript',
				certification: 'Online Certificate of Completion',
				date: 'May 14, 2024',
				certificate: 'diploma-javascript-practico.pdf',
				github: 'https://github.com/julianpedrazajf/javascript-practical-course-'
			},
			{
				platform: 'Platzi',
				course: 'CSS Animations',
				certification: 'Online Certificate of Completion',
				date: 'April 22, 2024',
				certificate: 'diploma-animaciones-css.pdf',
				github: 'https://github.com/julianpedrazajf/CSS-animation-course'
			},
			{
				platform: 'Platzi',
				course: 'Practical JavaScript Workshop: Basic Mathematics and Statistics',
				certification: 'Online Certificate of Completion',
				date: 'June 12, 2024',
				certificate: 'diploma-javascript-practico-matematicas.pdf',
				github: 'https://github.com/julianpedrazajf/25-Practical-Workshop-on-JavaScript-Mathematics-and-Basic-Statistics'
			},
			{
				platform: 'Platzi',
				course: 'Practical JavaScript Workshop: Create Your First Video Game!',
				certification: 'Online Certificate of Completion',
				date: 'June 22, 2024',
				certificate: 'diploma-javascript-practico-videojuegos.pdf',
				github: 'https://github.com/julianpedrazajf/26-taller-practico-javascript-videogames'
			},
			{
				platform: 'Platzi',
				course: 'Closures and Scope in JavaScript',
				certification: 'Online Certificate of Completion',
				date: 'July 16, 2024',
				certificate: 'diploma-javascript-closures-scope.pdf',
				github: 'https://github.com/julianpedrazajf/Closures-and-Scope-Course-in-JavaScript'
			},
			{
				platform: 'Platzi',
				course: 'Basic Object-Oriented Programming with JavaScript',
				certification: 'Online Certificate of Completion',
				date: 'July 30, 2024',
				certificate: 'diploma-javascript-poo.pdf',
				github: 'https://github.com/julianpedrazajf/Basic-Course-in-Object-Oriented-Programming-with-JavaScript'
			},
			{
				platform: 'Platzi',
				course: 'ECMAScript: History and Versions of JavaScript',
				certification: 'Online Certificate of Completion',
				date: 'September 25, 2024',
				certificate: 'diploma-ecmascript-6.pdf',
				github: 'https://github.com/julianpedrazajf/30-ECMAScript-Course-JavaScript-History-and-Versions'
			},
			{
				platform: 'Platzi',
				course: 'JavaScript Array Manipulation',
				certification: 'Online Certificate of Completion',
				date: 'October 8, 2024',
				certificate: 'diploma-arrays.pdf',
				github: 'https://github.com/julianpedrazajf/31-JavaScript-Array-Manipulation-Course'
			},
			{
				platform: 'Platzi',
				course: 'JavaScript Engine (V8) and the Browser',
				certification: 'Online Certificate of Completion',
				date: 'October 16, 2024',
				certificate: 'diploma-javascript-navegador.pdf',
				github: 'https://github.com/julianpedrazajf/32-JavaScript-Engine-V8-and-the-Browser-Course'
			},
			{
				platform: 'Platzi',
				course: 'Asynchronism with JavaScript',
				certification: 'Online Certificate of Completion',
				date: 'November 15, 2024',
				certificate: 'diploma-asincronismo-js.pdf',
				github: 'https://github.com/julianpedrazajf/33-Course-on-asynchronism-with-JavaScript'
			},
			{
				platform: 'Platzi',
				course: 'Fundamentals of SASS: Build Your First Landing Page',
				certification: 'Online Certificate of Completion',
				date: 'April 2, 2025',
				certificate: 'diploma-sass.pdf',
				github: 'https://github.com/julianpedrazajf/Landing-Page-with-Sass'
			},
			{
				platform: 'Platzi',
				course: 'TypeScript',
				certification: 'Online Certificate of Completion',
				date: 'June 18, 2025',
				certificate: 'diploma-typescript.pdf',
				github: 'https://github.com/julianpedrazajf/36-TypeScript-Course'
			}
		]
	},
	es: {
		title: 'Bootcamps y Cursos en Línea',
		bootcamps: [
			{
				platform: 'Crehana',
				course: 'Ilustración',
				certification: 'Certificado Oficial del Programa de Ilustración',
				date: 'Septiembre 2019',
				certificate: '4._degree_diploma_Illustration_Program_Co.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Computación Básica',
				certification: 'Certificado Online de Finalización (Curso de Computación Básica)',
				date: '4 Octubre 2022',
				certificate: 'diploma-computacion-basica.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Pensamiento Lógico: Algoritmos y Diagramas de Flujo',
				certification: 'Certificado Online de Finalización',
				date: '27 Noviembre 2022',
				certificate: 'diploma-pensamiento-logico.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Pensamiento Lógico: Funciones y Estructuras de Control',
				certification: 'Certificado Online de Finalización',
				date: '2 Junio 2023',
				certificate: 'diploma-pensamiento-logico-estructuras.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Pensamiento Lógico: Lenguajes de Programación',
				certification: 'Certificado Online de Finalización',
				date: '4 Junio 2023',
				certificate: 'diploma-pensamiento-logico-lenguajes.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Programación Básica',
				certification: 'Certificado Online de Finalización',
				date: '28 Junio 2023',
				certificate: 'diploma-pensamiento-logico-lenguajes.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Configuración de Entorno de Desarrollo en Windows',
				certification: 'Certificado Online de Finalización',
				date: '18 Julio 2023',
				certificate: 'diploma-configuracion-windows.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Fundamentos de Ingeniería de Software',
				certification: 'Certificado Online de Finalización',
				date: '6 Julio 2023',
				certificate: 'diploma-ingenieria.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Introducción a la Terminal y Línea de Comandos',
				certification: 'Certificado Online de Finalización',
				date: '23 Julio 2023',
				certificate: 'diploma-terminal.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Curso Profesional de Git y GitHub',
				certification: 'Certificado Online de Finalización',
				date: '14 Agosto 2023',
				certificate: 'diploma-git-github.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Flujo Moderno de Desarrollo con CodeStream',
				certification: 'Certificado Online de Finalización',
				date: '23 Agosto 2023',
				certificate: 'diploma-desarrollo-moderno-codestream.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Tecnología para Gerentes y Directores',
				certification: 'Certificado Online de Finalización',
				date: '5 Septiembre 2023',
				certificate: 'diploma-tecnologia-gerentes.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Introducción a la Web: Historia y Funcionamiento de Internet',
				certification: 'Certificado Online de Finalización',
				date: '30 Junio 2023',
				certificate: 'diploma-introweb.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Diseño para Programadores',
				certification: 'Certificado Online de Finalización',
				date: '16 Febrero 2024',
				certificate: 'diploma-diseno-programadores.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Frontend Developer',
				certification: 'Certificado Online de Finalización',
				date: '2 Enero 2024',
				certificate: 'diploma-frontend-developer.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Frontend Developer Práctico',
				certification: 'Certificado Online de Finalización',
				date: '16 Enero 2024',
				certificate: 'diploma-frontend-developer-practico.pdf',
				github: 'https://github.com/julianpedrazajf/Frontend-Developer-Practical-Course'
			},
			{
				platform: 'Platzi',
				course: 'HTML y CSS Práctico',
				certification: 'Certificado Online de Finalización',
				date: '24 Enero 2024',
				certificate: 'diploma-html-practico.pdf',
				github: 'https://github.com/julianpedrazajf/Practical-HTML-and-CSS-Course'
			},
			{
				platform: 'Platzi',
				course: 'Responsive Design: Mobile-First',
				certification: 'Certificado Online de Finalización',
				date: '13 Febrero 2024',
				certificate: 'diploma-mobile-first.pdf',
				github: 'https://github.com/julianpedrazajf/Responsive-Design-Course-Mobile-First'
			},
			{
				platform: 'Platzi',
				course: 'Sistemas de Diseño',
				certification: 'Certificado Online de Finalización',
				date: '20 Febrero 2024',
				certificate: 'diploma-sistemas-diseno.pdf'
			},
			{
				platform: 'Platzi',
				course: 'CSS Grid Básico',
				certification: 'Certificado Online de Finalización',
				date: '7 Marzo 2024',
				certificate: 'diploma-css-grid.pdf',
				github: 'https://github.com/julianpedrazajf/Basic-CSS-Grid-Course'
			},
			{
				platform: 'Platzi',
				course: 'CSS Layout Práctico',
				certification: 'Certificado Online de Finalización',
				date: '17 Marzo 2024',
				certificate: 'diploma-practico-css.pdf',
				github: 'https://github.com/julianpedrazajf/Practical-CSS-Layout-Course'
			},
			{
				platform: 'Platzi',
				course: 'CSS Grid Layout Profesional',
				certification: 'Certificado Online de Finalización',
				date: '2 Abril 2024',
				certificate: 'diploma-css-grid-layout.pdf'
			},
			{
				platform: 'Platzi',
				course: 'Transformaciones y Transiciones CSS',
				certification: 'Certificado Online de Finalización',
				date: '15 Abril 2024',
				certificate: 'diploma-transformaciones-transiciones-css.pdf',
				github: 'https://github.com/julianpedrazajf/22-CSS-Transformations-and-Transitions-Course'
			},
			{
				platform: 'Platzi',
				course: 'JavaScript Práctico',
				certification: 'Certificado Online de Finalización',
				date: '14 Mayo 2024',
				certificate: 'diploma-javascript-practico.pdf',
				github: 'https://github.com/julianpedrazajf/javascript-practical-course-'
			},
			{
				platform: 'Platzi',
				course: 'Animaciones CSS',
				certification: 'Certificado Online de Finalización',
				date: '22 Abril 2024',
				certificate: 'diploma-animaciones-css.pdf',
				github: 'https://github.com/julianpedrazajf/CSS-animation-course'
			},
			{
				platform: 'Platzi',
				course: 'Taller Práctico de JavaScript: Matemáticas y Estadística Básica',
				certification: 'Certificado Online de Finalización',
				date: '12 Junio 2024',
				certificate: 'diploma-javascript-practico-matematicas.pdf',
				github: 'https://github.com/julianpedrazajf/25-Practical-Workshop-on-JavaScript-Mathematics-and-Basic-Statistics'
			},
			{
				platform: 'Platzi',
				course: 'Taller Práctico de JavaScript: ¡Crea tu primer videojuego!',
				certification: 'Certificado Online de Finalización',
				date: '22 Junio 2024',
				certificate: 'diploma-javascript-practico-videojuegos.pdf',
				github: 'https://github.com/julianpedrazajf/26-taller-practico-javascript-videogames'
			},
			{
				platform: 'Platzi',
				course: 'Closures y Scope en JavaScript',
				certification: 'Certificado Online de Finalización',
				date: '16 Julio 2024',
				certificate: 'diploma-javascript-closures-scope.pdf',
				github: 'https://github.com/julianpedrazajf/Closures-and-Scope-Course-in-JavaScript'
			},
			{
				platform: 'Platzi',
				course: 'Programación Orientada a Objetos Básica con JavaScript',
				certification: 'Certificado Online de Finalización',
				date: '30 Julio 2024',
				certificate: 'diploma-javascript-poo.pdf',
				github: 'https://github.com/julianpedrazajf/Basic-Course-in-Object-Oriented-Programming-with-JavaScript'
			},
			{
				platform: 'Platzi',
				course: 'ECMAScript: Historia y Versiones de JavaScript',
				certification: 'Certificado Online de Finalización',
				date: '25 Septiembre 2024',
				certificate: 'diploma-ecmascript-6.pdf',
				github: 'https://github.com/julianpedrazajf/30-ECMAScript-Course-JavaScript-History-and-Versions'
			},
			{
				platform: 'Platzi',
				course: 'Manipulación de Arrays en JavaScript',
				certification: 'Certificado Online de Finalización',
				date: '8 Octubre 2024',
				certificate: 'diploma-arrays.pdf',
				github: 'https://github.com/julianpedrazajf/31-JavaScript-Array-Manipulation-Course'
			},
			{
				platform: 'Platzi',
				course: 'Motor de JavaScript (V8) y el Navegador',
				certification: 'Certificado Online de Finalización',
				date: '16 Octubre 2024',
				certificate: 'diploma-javascript-navegador.pdf',
				github: 'https://github.com/julianpedrazajf/32-JavaScript-Engine-V8-and-the-Browser-Course'
			},
			{
				platform: 'Platzi',
				course: 'Asincronismo con JavaScript',
				certification: 'Certificado Online de Finalización',
				date: '15 Noviembre 2024',
				certificate: 'diploma-asincronismo-js.pdf',
				github: 'https://github.com/julianpedrazajf/33-Course-on-asynchronism-with-JavaScript'
			},
			{
				platform: 'Platzi',
				course: 'Fundamentos de SASS: Crea tu primera landing page',
				certification: 'Certificado Online de Finalización',
				date: '2 Abril 2025',
				certificate: 'diploma-sass.pdf',
				github: 'https://github.com/julianpedrazajf/Landing-Page-with-Sass'
			},
			{
				platform: 'Platzi',
				course: 'TypeScript',
				certification: 'Certificado Online de Finalización',
				date: '18 Junio 2025',
				certificate: 'diploma-typescript.pdf',
				github: 'https://github.com/julianpedrazajf/36-TypeScript-Course'
			}
		]
	}
};

export default function OnlineBootcamps({ language = 'en' }) {
	const t = content[language];

	return (
		<div>
			<Navbar language={language} />
			<PageLayout title={t.title}>
				<section id="diplomas-bootcamps">
					{t.bootcamps.map((bootcamp, idx) => (
						<div key={idx} className="mb-10 bg-white/6 rounded-lg shadow p-6">
							<h2 className="text-xl font-semibold mb-2">{bootcamp.platform}</h2>
							<p className="mb-1 text-gray-300 font-medium">{bootcamp.course}</p>
							<p className="mb-1 text-gray-400">{bootcamp.certification}</p>
							<p className="mb-1 text-gray-400">Completion Date: {bootcamp.date}</p>
							{bootcamp.certificate && (
								<p className="mt-2">
									<a href={`/${bootcamp.certificate}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Certificate</a>
								</p>
							)}
							{bootcamp.github && (
								<p className="mt-2">
									<a href={bootcamp.github} target="_blank" rel="noopener noreferrer" className="text-green-400 underline">GitHub Repository</a>
								</p>
							)}
						</div>
					))}
				</section>
			</PageLayout>
		</div>
	);
}
