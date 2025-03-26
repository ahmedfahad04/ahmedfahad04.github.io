import Section from './Section';

const contactMethods = [
	{
		icon: 'fa-envelope',
		title: 'Email',
		value: 'ahmedfahad3596@gmail.com',
		link: 'mailto:ahmedfahad3596@gmail.com',
	},
	{
		icon: 'fa-linkedin',
		title: 'LinkedIn',
		value: 'ahmedfahad04',
		link: 'https://linkedin.com/in/ahmedfahad04',
	},
	{
		icon: 'fa-twitter',
		title: 'X (Twitter)',
		value: '@ahmedfahad1204', // Update if different
		link: 'https://twitter.com/ahmedfahad1204',
	},
	{
		icon: 'fa-kaggle',
		title: 'Kaggle',
		value: 'istiaqahmedfahad',
		link: 'https://kaggle.com/istiaqahmedfahad',
	},
	{
		icon: 'fa-medium',
		title: 'Medium',
		value: '@ahmedfahad04', // Update if different
		link: 'https://medium.com/@ahmedfahad04',
	},
];

const ConnectSection = () => {
	return (
		<Section
			id='contact'
			title='Connect with Me'
			subtitle='Find me on these platforms for collaboration or inquiries!'
			className='bg-gray-50'
		>
			<div className='max-w-4xl mx-auto'>
				<div className='no-visible animate-fade-in-right'>
					<div className='flex flex-wrap justify-center gap-6 md:gap-8'>
						{contactMethods.map((method, index) => (
							<a
								key={index}
								href={method.link}
								className='group flex items-center bg-blue-100 rounded-lg px-3 py-2 text-gray-800 hover:text-blue-800 transition-colors'
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className='relative mr-2'>
									<i
										className={`${
											method.icon === 'fa-envelope' ? 'fa-solid' : 'fa-brands'
										} ${method.icon} text-blue-700 text-lg`}
									></i>
									<span className='absolute inset-x-0 bottom-[-4px] h-1 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></span>
								</div>
								<span className='text-sm font-medium'>{method.value}</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default ConnectSection;
