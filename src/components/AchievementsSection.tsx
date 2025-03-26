import Section from './Section';

const achievements = [
	{
		id: 1,
		title: 'Rising Star Award @ IIT Emerging Cup Coding Contest',
		year: '2020',
		organizer: 'ITVerse 1.0',
		organization: 'ITVerse 1.0',
		description:
			'Designed and implemented efficient algorithms to solve complex coding challenges, demonstrating innovative problem-solving techniques that outperformed peers.',
		url: 'http://www.iit.du.ac.bd/view_news_events/view_news_events_details/106',
	},
	{
		id: 2,
		title: '1st Runner-Up @ DU Innovation Fair',
		year: '2024',
		organizer: 'Dhaka University Innovation Fair',
		organization: 'Dhaka University Innovation Fair',
		description:
			'Created "EmPower," a desktop app with PyQt5 and SQLite, integrating object identification and gaze tracking to support interactive learning for autistic children.',
		url: 'https://www.linkedin.com/posts/ahmedfahad04_innovation-autismawareness-assistivelearning-activity-7170788806185377792-R5rX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAmA14B2vZOHlWTsyOEd2SCQAZjw2toC1g',
	},
	{
		id: 3,
		title: '2nd Runner-Up @ SUST DL Enigma 1.0',
		year: '2024',
		organizer: 'SUST CSE Carnival',
		organization: 'SUST',
		description:
			'As part of Team DU_MetroRail, developed a deep learning model using YOLO and DETR to enhance object detection for autonomous vehicles, improving accuracy in Bangladeshi road conditions.',
		url: 'https://www.kaggle.com/competitions/dl-enigma-10-sust-cse-carnival-2024',
	},

	{
		id: 5,
		title: '4th Place @ ভাষা-বিচিত্রা: ASR for Regional Dialects',
		year: '2024',
		organizer: 'IUT National ICT Fest',
		organization: 'IUT National ICT Fest',
		description:
			'With Team DataDojo, engineered an Automatic Speech Recognition (ASR) system using deep learning to transcribe Bengali regional dialects, achieving high accuracy across diverse speech patterns.',
		url: 'https://www.facebook.com/profile.php?id=61557001187321',
	},
	{
		id: 4,
		title: '6th Place @ DL Sprint 3.0 | Bengali AI Math Olympiad',
		year: '2024',
		organizer: 'BUET CSE Fest',
		organization: 'BUET CSE Fest',
		description:
			'Developed and fine-tuned a deep learning model to solve mathematical reasoning problems in Bengali, optimizing performance for low-resource language contexts.',
		url: 'https://www.kaggle.com/competitions/dlsprint3',
	},
	{
		id: 5,
		title: 'Completed (Top 30) @ Learnathon 2.0',
		year: '2024',
		organizer: 'Learnathon 2.0',
		organization: 'Learnathon',
		description:
			'Mastered industrial coding practices and built scalable solutions, including a contact management system, securing a top 30 spot through rigorous challenges.',
		url: 'https://vivasoftltd.com/learnathon-2-0/',
	},
	{
		id: 6,
		title: 'Project Showcase @ NASA Space Apps Challenge',
		year: '2024',
		organizer: 'NASA Space App Challenge',
		organization: 'NASA',
		description:
			'Built "GHG Explorer" using Streamlit and NASA APIs, creating an interactive map to visualize greenhouse gas emissions, enhancing environmental data accessibility.',
		url: 'https://www.spaceappschallenge.org',
	},
	{
		id: 7,
		title: 'Phase 2 Qualifier @ Code Samurai 2024',
		year: '2024',
		organizer: 'Code Samurai',
		organization: 'Code Samurai',
		description:
			'Developed "EcoSync," a waste management app with React and Node.js, implementing real-time dashboards and automated billing to optimize urban waste handling.',
		url: 'https://www.codesamuraibd.net/',
	},
];

const AchievementsSection = () => {
	return (
		<Section
			id='achievements'
			title='Awards & Achievements'
			subtitle='Recognition of excellence in technology and innovation'
			className='bg-gray-50'
		>
			<div className='max-w-4xl mx-auto'>
				<div className='space-y-6 stagger-animation'>
					{achievements.map((achievement) => (
						<div
							key={achievement.id}
							className='bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 no-visible animate-fade-up'
						>
							<div className='p-6 bg-gradient-to-b from-white to-gray-50'>
								<div className='flex flex-col gap-3'>
									<div className='flex items-start justify-between'>
										<div className='flex-1'>
											<div className='flex items-center gap-3 mb-2'>
												<span className='px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium'>
													{achievement.year}
												</span>
											</div>
											<h3 className='text-lg font-semibold text-gray-800 leading-tight'>
												{achievement.title.split(' @ ')[0]}{' '}
												<span className='text-blue-700'>
													@ {achievement.title.split(' @ ')[1]}
												</span>
											</h3>
										</div>
										<a
											href={achievement.url}
											className='ml-4 text-xs  px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200 rounded-full font-semibold'
											target='_blank'
											rel='noopener noreferrer'
										>
											{achievement.organizer}
										</a>
									</div>
									<p className='text-gray-600 text-sm leading-relaxed'>
										{achievement.description}
									</p>
									{/* {achievement.url && (
										<a
											href={achievement.url}
											className='text-blue-600 hover:text-blue-800 text-sm font-medium underline'
											target='_blank'
											rel='noopener noreferrer'
										>
											Visit Competition
										</a>
									)} */}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default AchievementsSection;
