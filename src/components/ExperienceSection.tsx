import { Calendar, MapPin } from 'lucide-react';
import Section from './Section';

const experiences = [
	{
		id: 1,
		position: 'Trainee Software Engineer',
		company: 'Cefalo Bangladesh Limited',
		location: 'Dhaka, Bangladesh',
		period: 'Jan 2024 - Feb 2025 (1 year 2 months)',
		description:
			'Designed backend APIs following REST API standards, tested them using Postman, and managed databases with MySQL & Sequelize. Mastered SCRUM methodology for efficient project updates, fostering agile collaboration within the team. (Roles: Trainee Software Engineer, Aug 2024 - Feb 2025, 7 months; Jan 2024 - Aug 2024, 8 months)',
	},
	{
		id: 2,
		position: 'Research Assistant Intern',
		company: 'Data & Design Lab (DnD Lab)',
		location: 'Dhaka, Bangladesh',
		period: 'Nov 2023 - Jan 2025 (1 year 3 months)',
		description:
			'Conducted exploratory data analysis (EDA) on real-world datasets, researched data imputation techniques, and worked with time-series data. Built interactive dashboards with Streamlit and created visualizations for efficient data analysis.',
	},
	{
		id: 3,
		position: 'Research Intern',
		company: 'University of Illinois Urbana-Champaign',
		location: 'Remote',
		period: 'May 2024 - Aug 2024 (4 months)',
		description:
			'Reviewed academic papers on code translation, readability, and software bugs, synthesizing actionable insights. Contributed to repository restructuring, enhanced evaluation scripts, and maintained high-quality pull requests.',
	},
	{
		id: 4,
		position: 'Seminar and Library Secretary',
		company: "IIT Software Engineers' Community",
		location: 'Dhaka, Bangladesh',
		period: 'Apr 2023 - Mar 2024 (1 year)',
		description:
			'Arranged seminars on blockchain, conducted GitHub and Linux sessions for freshers, and organized the Capture The Flag (CTF) event at Cefalo Presents ITVerse2023.',
	},
	{
		id: 5,
		position: 'Software Engineer Intern',
		company: 'Vivasoft Limited',
		location: 'Dhaka, Bangladesh',
		period: 'Sep 2023 - Feb 2024 (6 months)',
		description:
			'Worked on the in-house "Vivasoft Contact Management System" as part of Learnathon 2.0 Phase 2. Learned industrial coding patterns, best practices, pixel-perfect UI development from Figma designs, and large-scale project management on GitHub.',
	},
	{
		id: 6,
		position: 'Python Developer',
		company: 'Optagen Technologies',
		location: 'Dhaka, Bangladesh',
		period: 'Jul 2021 - Jun 2023 (2 years)',
		description:
			'Developed a desktop application for an Automated Bio Flock System using the Python framework PyQt5.',
	},
	{
		id: 7,
		position: 'Freelance Writer',
		company: 'Rank Wizards LLC',
		location: 'Remote',
		period: 'Sep 2021 - Jan 2022 (5 months)',
		description: 'Created SEO-friendly content based on customer demands.',
	},
];

const ExperienceSection = () => {
	return (
		<Section
			id='experience'
			title='Professional Experience'
			subtitle='A journey through my technical and professional career'
		>
			<div className='relative'>
				<div className='absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block'></div>

				<div className='space-y-12 relative stagger-animation'>
					{experiences.map((experience, index) => (
						<div
							key={experience.id}
							className={`flex flex-col md:flex-row gap-8 relative no-visible animate-fade-up ${
								index % 2 === 0 ? 'md:flex-row-reverse' : ''
							}`}
						>
							<div className='md:w-1/2 flex justify-center items-center'>
								<div className='hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 z-10'></div>
								<div
									className={`glass-card rounded-xl p-6 w-full max-w-lg ${
										index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
									}`}
								>
									<div className='text-sm font-medium text-primary mb-2 flex items-center'>
										<Calendar size={14} className='mr-1' /> {experience.period}
									</div>
									<h3 className='text-xl font-bold mb-1'>
										{experience.position}
									</h3>
									<div className='text-gray-700 font-medium mb-3'>
										{experience.company}
									</div>
									<div className='text-gray-500 text-sm mb-4 flex items-center'>
										<MapPin size={14} className='mr-1' /> {experience.location}
									</div>
									<p className='text-gray-600'>{experience.description}</p>
								</div>
							</div>
							<div className='md:w-1/2'></div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default ExperienceSection;
