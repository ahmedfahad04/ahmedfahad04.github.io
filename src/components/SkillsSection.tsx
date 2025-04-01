import { BarChart, Brain, Code, Server, Terminal } from 'lucide-react';
import Section from './Section';

const skillCategories = [
	{
		id: 1,
		name: 'Programming',
		icon: <Code className='h-6 w-6 text-primary' />,
		skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'], // Removed R, SQL moved to Data Analysis
	},
	{
		id: 2,
		name: 'Frameworks & Libraries',
		icon: <Terminal className='h-6 w-6 text-primary' />,
		skills: [
			'React',
			'Next.js',
			'AngularJS',
			'TailwindCSS',
			'Ant Design',
			'Node.js',
			'NestJS',
			'FastAPI',
			'TypeORM',
		], // Combined Tools & Frameworks with AI frameworks
	},
	{
		id: 3,
		name: 'Data Analysis',
		icon: <BarChart className='h-6 w-6 text-primary' />, // Changed to BarChart for relevance
		skills: [
			'Pandas',
			'NumPy',
			'SciPy',
			'SQL',
			'Statsmodels',
			'Matplotlib',
			'Seaborn',
			'Plotly',
			'Dash',
			'Streamlit',
		], // New category for data analysis tools
	},
	{
		id: 4,
		name: 'Development Tools',
		icon: <Server className='h-6 w-6 text-primary' />,
		skills: [
			'Git',
			'GitHub',
			'Linux',
			'Docker',
			'Firebase',
			'Jupyter Notebook',
			'Jira',
			'Postman',
		], // Adjusted from Infrastructure
	},
	{
		id: 5,
		name: 'AI-AI Frameworks/Tools',
		icon: <Brain className='h-6 w-6 text-blue-700' />,
		skills: ['PyTorch', 'Scikit-learn', 'Hugging Face Transformers'],
	},
];

const SkillsSection = () => {
	return (
		<Section
			id='skills'
			title='Skills'
			subtitle='Technical expertise and tools I work with'
			className='bg-gray-50'
		>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto'>
				{' '}
				{/* Added max-w-5xl mx-auto */}
				{skillCategories.map((category) => (
					<div
						key={category.id}
						className='p-6 bg-white rounded-lg shadow-lg border border-gray-100'
					>
						<div className='flex items-center gap-3 mb-4'>
							{category.icon}
							<h3 className='text-lg font-semibold text-gray-800'>
								{category.name}
							</h3>
						</div>
						<div className='flex flex-wrap gap-2'>
							{category.skills.map((skill, index) => (
								<span
									key={index}
									className='px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium'
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export default SkillsSection;
