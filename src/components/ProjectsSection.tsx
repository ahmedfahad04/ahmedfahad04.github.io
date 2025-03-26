import { Github, Globe } from 'lucide-react';
import Section from './Section';

const projects = [
	{
		id: 1,
		title: 'Cefalo Payroll',
		description:
			'A payroll application automating employee payment processes, including wage calculation, tax withholding, direct deposits, and payroll reports. Implemented modules such as inflation management, addressing user feedback to resolve three significant pain points.',
		techStack: ['Next.js', 'Nest.js', 'TypeScript', 'TypeORM', 'MySQL'],
		githubUrl: '',
		websiteUrl: '',
		image:
			'https://img.freepik.com/free-photo/top-view-payroll-concept-with-cash-calculator_23-2149103971.jpg?semt=ais_hybrid',
	},
	{
		id: 2,
		title: 'Beautified You Shop',
		description:
			'An online beauty shop with comprehensive features for users and administrators. Built robust user and admin panels with inventory management, streamlined order handling, product analytics, and advanced search/filter functionalities.',
		techStack: ['TypeScript', 'Next.js', 'Nest.js', 'MongoDB'],
		githubUrl: '',
		websiteUrl: 'https://beautifiedyou.vercel.app/',
		image: './images/beautifiedyou.png', // Image of beauty products/e-commerce
	},
	{
		id: 3,
		title: 'EcoSync',
		description:
			'A waste management application for Dhaka North City Corporation (DNCC), developed during Code Samurai 2024 Phase 2. Features include role-based user management, secure authentication, automated billing, real-time dashboards, and data entry modules for vehicles, STS facilities, and landfills.',
		techStack: ['React', 'Node.js', 'TypeScript', 'MySQL', 'Postman'],
		githubUrl: 'https://github.com/ahmedfahad04/EcoSync-Code-Samurai-2024',
		websiteUrl: '',
		image:
			'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Image of waste management/environment
	},
	{
		id: 4,
		title: 'EmPower',
		description:
			'An interactive desktop learning application for autistic children, featuring object identification, task scheduling, gaze tracking, and progress monitoring. Won 2nd prize at the DU Innovation Fair in the Best Innovation Idea Award Category.',
		techStack: ['Python', 'PyQt5', 'SQLite'],
		githubUrl: 'https://github.com/ahmedfahad04/EmPower',
		websiteUrl: '',
		image: './images/empower.png', // Image of education/learning tech
	},
	{
		id: 5,
		title: 'AI-based Symptom-to-Disease Mapping',
		description:
			'An NLP-based system using DistilBERT for symptom analysis and specialist mapping. Provided clinic details like locations, working hours, and appointment scheduling, streamlining patient-doctor connections.',
		techStack: ['Python', 'React', 'TailwindCSS'],
		githubUrl: 'https://github.com/ahmedfahad04/AI-Symptom-to-Disease-Mapping',
		websiteUrl: '',
		image:
			'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Image of healthcare/AI in medicine
	},
	{
		id: 6,
		title: 'GHG Explorer',
		description:
			'Built for NASA Space App Challenge 2024 to raise awareness of Greenhouse Gas (GHG) impacts. Features an interactive map showcasing area-based GHG statistics from NASA Public API data, visualizing human-caused and natural emissions.',
		techStack: ['Python', 'Streamlit', 'Gemini API', 'Google Maps API'],
		githubUrl: 'https://github.com/SwarnaIslam/GHG-Exploration',
		websiteUrl: 'https://ghg-exploration.vercel.app/',
		image: './images/ghg_X.png', // Image of environmental data/maps
	},
	{
		id: 7,
		title: 'Vivasoft Contact Management System',
		description:
			'Developed the front-end of a contact management system with pixel-perfect UI, delivering responsive design and enhanced user experience.',
		techStack: ['React', 'TypeScript', 'TailwindCSS'],
		githubUrl: '',
		websiteUrl: '',
		image:
			'https://images.unsplash.com/photo-1551288049-b11d4a0c77d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Image of contact management/UI
	},
	{
		id: 8,
		title: 'Mini Chess with AI',
		description:
			'A 5×6 chess game with Human vs Human, Human vs AI, and AI vs AI modes. Implemented Min-Max algorithms for AI decision-making and designed an engaging interface with sound effects and a move counter.',
		techStack: ['Python', 'PyGame'],
		githubUrl: 'https://github.com/ahmedfahad04/AI-Project-1-Mini-Chess',
		websiteUrl: '',
		image:
			'https://images.unsplash.com/photo-1588394768351-2a9e9e5e4614?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Image of chess/game development
	},
	{
		id: 9,
		title: 'Wumpus World',
		description:
			'An AI-driven application demonstrating intelligent navigation in a 10x10 grid. Implemented Propositional and First Order Logic, logical inference, and probabilistic reasoning for agent exploration and survival.',
		techStack: ['ReactJS', 'TypeScript', 'JavaScript'],
		githubUrl: 'https://github.com/ahmedfahad04/AI-Project-2-Wumpus-World',
		websiteUrl: 'https://wumpus-world-ai.netlify.app/',
		image: './images/wumpus.png', // Image of AI/logic-based game
	},
	// {
	// 	id: 10,
	// 	title: 'E-Library',
	// 	description:
	// 		'An online library management system with seamless front-end to back-end integration and database design, ensuring an efficient user experience for managing library scenarios.',
	// 	techStack: ['AngularJS', 'FastAPI', 'MySQL'],
	// 	githubUrl: '',
	// 	websiteUrl: '',
	// 	image:
	// 		'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Image of library/books
	// },
];

const ProjectsSection = () => {
	return (
		<Section
			id='projects'
			title='Projects'
			subtitle='Innovative solutions with real-world impact'
			className='bg-gray-50'
		>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation'>
				{projects.map((project) => (
					<div
						key={project.id}
						className='group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 no-visible animate-fade-up'
					>
						<div className='relative p-6'>
							<div className='absolute top-4 right-4 flex gap-3'>
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors'
										target='_blank'
										rel='noopener noreferrer'
									>
										<Github size={18} className='text-gray-700 fill-gray-700' />
									</a>
								)}
								{project.websiteUrl && (
									<a
										href={project.websiteUrl}
										className='p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors '
										target='_blank'
										rel='noopener noreferrer'
									>
										<Globe size={18} className='text-blue-700 fill-white ' />
									</a>
								)}
							</div>

							<h3 className='text-xl font-semibold text-gray-800 mb-3'>
								{project.title}
							</h3>
							<p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3'>
								{project.description}
							</p>

							<div className='mt-6'>
								<div className='flex flex-wrap gap-2'>
									{project.techStack.map((tech, index) => (
										<span
											key={index}
											className='px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors'
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export default ProjectsSection;
