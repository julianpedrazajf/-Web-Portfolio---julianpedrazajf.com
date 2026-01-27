import React from 'react';
import Navbar from '../../Navbar';
import PageLayout from '../../components/PageLayout';

const content = {
	en: {
		title: 'Full-Time Positions',
		menzies: {
			company: 'Menzies Aviation',
			role: 'AIR Cargo Agent',
			duration: 'June 2023 – Aug 2025',
			location: 'Sydney, Australia',
			description: 'As an Air Cargo Agent at Menzies Aviation in Sydney for over two years, I have specialized in handling and transporting heavy cargo using high-ton forklifts, supported by my ADA airport driving license, forklift license, and ASIC clearance for secure airside access. My role involves building and breaking down ULDs, preparing and verifying cargo documentation such as air waybills and manifests, and ensuring compliance with IATA, airline, and customs regulations. I have experience managing dangerous goods, perishables, and special shipments, while coordinating closely with freight forwarders, airline representatives, and ground handling teams to guarantee safe, timely, and efficient cargo operations in a fast-paced airport environment.',
			skills: 'Forklift and high-ton equipment operation, airport driving (ADA), secure airside access (ASIC), ULD build-up and break-down, cargo handling and documentation, dangerous goods and special cargo processing, teamwork in fast-paced environments, safety compliance, reliability.',
			reference: {
				name: 'Adam Burt',
				title: 'Warehouse Manager',
				contact: '+61 432 097 782'
			}
		},
		labourConnect: {
			company: 'Labour Connect',
			role: 'Skilled Labour',
			duration: 'November 2022 – June 2023',
			location: 'Sydney, Australia',
			description: 'As a Skilled Labourer with Labour Connect Recruitment Services in Sydney, I worked for eight months supporting qualified tradespeople including carpenters, electricians, and plumbers across a variety of construction and maintenance projects. I was responsible for preparing and maintaining worksites, organising and transporting tools, materials, and equipment, and carrying out basic construction, installation, and repair tasks under supervision. I consistently contributed to efficient workflow by assisting trades with hands-on tasks, ensuring projects stayed on schedule and were completed to quality standards. In addition, I adhered strictly to WHS (Work Health and Safety) regulations and site protocols, promoting a safe work environment for all team members.',
			skills: 'Hand and power tool operation, material handling, site preparation, trade assistance in carpentry, electrical and plumbing tasks, safety compliance, reliability.',
			reference: {
				name: 'Alex Wehbe',
				title: 'Director',
				contact: '+61 448 850 329'
			}
		},
		tech: {
			company: 'TECH Universidad Tecnologica',
			role: 'Academic Advisor',
			duration: 'January 2022 – August 2022',
			location: 'Bogota, Colombia',
			description: 'Responsible for the marketing and consulting of the university\'s academic portfolio, including diplomas, bachelor\'s degrees, and master\'s programs. I managed a monthly client portfolio valued at approximately USD 40,000, providing personalized guidance in Spanish and English to students and professionals worldwide through the university\'s call center. I oversaw customer service, consulting, and collections, ensuring accurate information, effective communication, and high service standards.',
			skills: 'Academic sales, customer service, portfolio and collections management, bilingual communication (Spanish–English), business advisory, achievement of sales and collection targets, interpersonal skills, and multicultural adaptability.',
			reference: {
				name: 'Viviana Melo',
				title: 'Supervisor',
				contact: '+57 321 9688206'
			}
		},
		rdv: {
			company: 'Representaciones Industriales RDV LTDA',
			role: 'Commercial Advisor',
			duration: 'May 2017 to September 2017 (Cali) and July 2021 to November 2021 (Bogotá)',
			location: 'Cali - Bogota, Colombia',
			description: 'Responsible for the commercialization and client advisory of the company\'s industrial product portfolio, including engineering plastics, industrial hoses, couplings, industrial meshes, among others. In charge of preparing quotations and addressing client requests by applying technical knowledge to calculate the required measurements and quantities, ensuring accuracy and competitiveness in proposals. Provided guidance in the correct selection of products, managed the sales process from initial contact through delivery and after-sales service.',
			skills: 'Technical sales of industrial products, commercial advisory and customer service, preparation and analysis of quotations, measurement and quantity calculations, negotiation and deal closing, full sales process management.',
			reference: {
				name: 'Carlos Alberto Garcia',
				title: 'Commercial Manager',
				contact: '+57 301 3614448'
			}
		},
		sultana: {
			company: 'Ladrillera La Sultana',
			role: 'External Sales Advisor',
			duration: 'October 2019 – June 2021',
			location: 'Cali, Colombia',
			description: 'Responsible for the commercialization of the company\'s clay-based product portfolio, including blocks, bricks, and ceramic finishes, to hardware stores located in the Eastern, Northern, Southeastern, and Western zones of the city, as well as nearby municipalities. Also managed commercial relationships with construction companies operating within and outside the city, offering tailored business solutions. Handled a client portfolio valued at an average of 100 million COP.',
			skills: 'B2B sales, portfolio and credit management, customer service, point-of-sale operations, credit risk analysis, business decision-making, organization, punctuality, cash handling, collections, autonomy.',
			reference: {
				name: 'Jose Fernando Reyes',
				title: 'Commercial Manager',
				contact: '+57 311 3835096'
			}
		}
	},
	es: {
		title: 'Puestos a Tiempo Completo',
		menzies: {
			company: 'Menzies Aviation',
			role: 'Agente de Carga Aérea',
			duration: 'Junio 2023 – Agosto 2025',
			location: 'Sydney, Australia',
			description: 'Como Agente de Carga Aérea en Menzies Aviation Sydney durante más de dos años, me he especializado en el manejo y transporte de carga pesada utilizando montacargas de alta capacidad, respaldado por mi licencia de conducción aeroportuaria ADA, licencia de montacargas y autorización ASIC para acceso seguro a zonas restringidas. Mi función incluye el armado y desarmado de ULDs, preparación y verificación de documentación de carga como guías aéreas y manifiestos, y asegurar el cumplimiento de las regulaciones IATA, aerolíneas y aduanas. Tengo experiencia en el manejo de mercancías peligrosas, perecederas y envíos especiales.',
			skills: 'Operación de montacargas y equipos de alta capacidad, conducción aeroportuaria (ADA), acceso seguro a zonas restringidas (ASIC), armado y desarmado de ULDs, manejo y documentación de carga, procesamiento de mercancías peligrosas y carga especial, trabajo en equipo en ambientes de alto ritmo, cumplimiento de seguridad, confiabilidad.',
			reference: {
				name: 'Adam Burt',
				title: 'Gerente de Almacén',
				contact: '+61 432 097 782'
			}
		},
		labourConnect: {
			company: 'Labour Connect',
			role: 'Trabajador Especializado',
			duration: 'Noviembre 2022 – Junio 2023',
			location: 'Sydney, Australia',
			description: 'Como Trabajador Especializado en Labour Connect Recruitment Services en Sydney, trabajé durante ocho meses apoyando a profesionales calificados incluyendo carpinteros, electricistas y plomeros en diversos proyectos de construcción y mantenimiento. Era responsable de preparar y mantener lugares de trabajo, organizar y transportar herramientas, materiales y equipos, y realizar tareas básicas de construcción, instalación y reparación bajo supervisión. Contribuí consistentemente al flujo eficiente de trabajo asistiendo en tareas prácticas, asegurando que los proyectos se mantuvieran en cronograma y se completaran según los estándares de calidad.',
			skills: 'Operación de herramientas manuales y eléctricas, manejo de materiales, preparación de sitios, asistencia técnica en carpintería, tareas eléctricas y de plomería, cumplimiento de seguridad, confiabilidad.',
			reference: {
				name: 'Alex Wehbe',
				title: 'Director',
				contact: '+61 448 850 329'
			}
		},
		tech: {
			company: 'TECH Universidad Tecnológica',
			role: 'Asesor Académico',
			duration: 'Enero 2022 – Agosto 2022',
			location: 'Bogotá, Colombia',
			description: 'Responsable de la comercialización y asesoría del portafolio académico de la universidad, incluyendo diplomados, licenciaturas y programas de maestría. Gestioné una cartera mensual de clientes valorada en aproximadamente USD 40,000, brindando orientación personalizada en español e inglés a estudiantes y profesionales de todo el mundo a través del centro de llamadas de la universidad. Supervisé el servicio al cliente, consultoría y cobranzas, asegurando información precisa, comunicación efectiva y altos estándares de servicio.',
			skills: 'Ventas académicas, servicio al cliente, gestión de cartera y cobranzas, comunicación bilingüe (español-inglés), asesoría comercial, logro de metas de ventas y cobranzas, habilidades interpersonales y adaptabilidad multicultural.',
			reference: {
				name: 'Viviana Melo',
				title: 'Supervisora',
				contact: '+57 321 9688206'
			}
		},
		rdv: {
			company: 'Representaciones Industriales RDV LTDA',
			role: 'Asesor Comercial',
			duration: 'Mayo 2017 a Septiembre 2017 (Cali) y Julio 2021 a Noviembre 2021 (Bogotá)',
			location: 'Cali - Bogotá, Colombia',
			description: 'Responsable de la comercialización y asesoría del portafolio de productos industriales de la empresa, incluyendo plásticos de ingeniería, mangueras industriales, acoples, mallas industriales, entre otros. Encargado de preparar cotizaciones y atender solicitudes de clientes aplicando conocimientos técnicos para calcular las medidas y cantidades requeridas, asegurando precisión y competitividad en las propuestas. Brindé orientación en la correcta selección de productos, gestioné el proceso de ventas desde el contacto inicial hasta la entrega y servicio post-venta.',
			skills: 'Ventas técnicas de productos industriales, asesoría comercial y servicio al cliente, preparación y análisis de cotizaciones, cálculos de medidas y cantidades, negociación y cierre de ventas, gestión completa del proceso de ventas.',
			reference: {
				name: 'Carlos Alberto Garcia',
				title: 'Gerente Comercial',
				contact: '+57 301 3614448'
			}
		},
		sultana: {
			company: 'Ladrillera La Sultana',
			role: 'Asesor Comercial Externo',
			duration: 'Octubre 2019 – Junio 2021',
			location: 'Cali, Colombia',
			description: 'Responsable de la comercialización del portafolio de productos de arcilla de la empresa, incluyendo bloques, ladrillos y acabados cerámicos, a ferreterías ubicadas en las zonas Oriental, Norte, Suroriental y Occidental de la ciudad, así como municipios cercanos. También gestioné relaciones comerciales con empresas constructoras que operan dentro y fuera de la ciudad, ofreciendo soluciones comerciales personalizadas. Manejé una cartera de clientes valorada en un promedio de 100 millones de pesos COP.',
			skills: 'Ventas B2B, gestión de cartera y crédito, servicio al cliente, operaciones de punto de venta, análisis de riesgo crediticio, toma de decisiones comerciales, organización, puntualidad, manejo de efectivo, cobranzas, autonomía.',
			reference: {
				name: 'Jose Fernando Reyes',
				title: 'Gerente Comercial',
				contact: '+57 311 3835096'
			}
		}
	}
};

export default function FullTime({ language = 'en' }) {
	const t = content[language];

	return (
		<div>
			<Navbar language={language} />
			<PageLayout title={t.title}>
				<section id="work-fulltime">
					
					   {/* Menzies Aviation */}
					<section className="mb-12 bg-white/6 rounded-lg shadow-lg p-6 space-y-4 border-b border-gray-600">
						   <h2 className="text-2xl font-semibold !text-accent mb-6 p-10 " >{t.menzies.company}</h2>
						   <p className="job-role mb-6">{t.menzies.role}</p>
						   <p className="text-gray-400 job-meta mb-6">{t.menzies.duration} | {t.menzies.location}</p>
						   <p className="text-gray-300 mb-6">{t.menzies.description}</p>
						   <div className="mb-6">
							   <h3 className="font-medium mb-2">Skills:</h3>
							   <p className="text-gray-300">{t.menzies.skills}</p>
						   </div>
						   <div className="text-sm text-gray-400 mb-2">
							   <p>{t.menzies.reference.title}: {t.menzies.reference.name}</p>
							   <p>Contact: {t.menzies.reference.contact}</p>
						   </div>
					   </section>

					<div className="section-separator-1000px" aria-hidden="true" />

					   {/* Labour Connect */}
					<section className="mb-12 bg-white/6 rounded-lg shadow-lg p-6 space-y-4 border-b border-gray-600">
						   <h2 className="text-2xl font-semibold !text-accent mb-6">{t.labourConnect.company}</h2>
						   <p className="job-role mb-6">{t.labourConnect.role}</p>
						   <p className="text-gray-400 job-meta mb-6">{t.labourConnect.duration} | {t.labourConnect.location}</p>
						   <p className="text-gray-300 mb-6">{t.labourConnect.description}</p>
						   <div className="mb-6">
							   <h3 className="font-medium mb-2">Skills:</h3>
							   <p className="text-gray-300">{t.labourConnect.skills}</p>
						   </div>
						   <div className="text-sm text-gray-400 mb-2">
							   <p>{t.labourConnect.reference.title}: {t.labourConnect.reference.name}</p>
							   <p>Contact: {t.labourConnect.reference.contact}</p>
						   </div>
					   </section>

					<div className="section-separator-1000px" aria-hidden="true" />

					   {/* TECH Universidad */}
					<section className="mb-12 bg-white/6 rounded-lg shadow-lg p-6 space-y-4 border-b border-gray-600">
						   <h2 className="text-2xl font-semibold !text-accent mb-6">{t.tech.company}</h2>
						   <p className="job-role mb-6">{t.tech.role}</p>
						   <p className="text-gray-400 job-meta mb-6">{t.tech.duration} | {t.tech.location}</p>
						   <p className="text-gray-300 mb-6">{t.tech.description}</p>
						   <div className="mb-6">
							   <h3 className="font-medium mb-2">Skills:</h3>
							   <p className="text-gray-300">{t.tech.skills}</p>
						   </div>
						   <div className="text-sm text-gray-400 mb-2">
							   <p>{t.tech.reference.title}: {t.tech.reference.name}</p>
							   <p>Contact: {t.tech.reference.contact}</p>
						   </div>
					   </section>

					<div className="section-separator-1000px" aria-hidden="true" />

					   {/* RDV LTDA */}
					<section className="mb-12 bg-white/6 rounded-lg shadow-lg p-6 space-y-4 border-b border-gray-600">
						   <h2 className="text-2xl font-semibold !text-accent mb-6">{t.rdv.company}</h2>
						   <p className="job-role mb-6">{t.rdv.role}</p>
						   <p className="text-gray-400 job-meta mb-6">{t.rdv.duration} | {t.rdv.location}</p>
						   <p className="text-gray-300 mb-6">{t.rdv.description}</p>
						   <div className="mb-6">
							   <h3 className="font-medium mb-2">Skills:</h3>
							   <p className="text-gray-300">{t.rdv.skills}</p>
						   </div>
						   <div className="text-sm text-gray-400 mb-2">
							   <p>{t.rdv.reference.title}: {t.rdv.reference.name}</p>
							   <p>Contact: {t.rdv.reference.contact}</p>
						   </div>
					   </section>

					<div className="section-separator-1000px" aria-hidden="true" />

					   {/* Ladrillera La Sultana */}
					<section className="mb-12 bg-white/6 rounded-lg shadow-lg p-6 space-y-4 border-b border-gray-600">
						   <h2 className="text-2xl font-semibold !text-accent mb-6">{t.sultana.company}</h2>
						   <p className="job-role mb-6">{t.sultana.role}</p>
						   <p className="text-gray-400 job-meta mb-6">{t.sultana.duration} | {t.sultana.location}</p>
						   <p className="text-gray-300 mb-6">{t.sultana.description}</p>
						   <div className="mb-6">
							   <h3 className="font-medium mb-2">Skills:</h3>
							   <p className="text-gray-300">{t.sultana.skills}</p>
						   </div>
						   <div className="text-sm text-gray-400 mb-2">
							   <p>{t.sultana.reference.title}: {t.sultana.reference.name}</p>
							   <p>Contact: {t.sultana.reference.contact}</p>
						   </div>
					   </section>
				</section>
			</PageLayout>
		</div>
		);
};