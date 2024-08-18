import { projects } from './data';

export default function Projects() {
	return (
		<section id='projects' className='text-gray-400 bg-gray-900 body-font'>
			<div className='container px-5 py-10 mx-auto text-center lg:px-40'>
				<div className='flex flex-col w-full mb-20'>
					<div className='mx-auto inline-block w-10 mb-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
							/>
						</svg>
					</div>

					<h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
						Projects
					</h1>
				</div>

				{/* project cards */}
				<div className='flex flex-wrap -m-4 justify-center'>
					{projects.map((project) => (
						<a
							href={project.link}
							target='_blank'
							className='cursor-pointer w-full sm:w-1/2 lg:w-1/3 p-3'
							key={project.title}
						>
							<div className='flex flex-col h-full max-w-sm overflow-hidden shadow-lg bg-[#1F2937] rounded-lg'>
								<div className='h-48 flex-shrink-0'>
									<img
										className='w-full h-full object-cover'
										src={project.image}
										alt='project banner'
									/>
								</div>
								<div className='flex flex-col justify-between flex-grow p-6'>
									<div>
										<h2 className='font-bold text-yellow-300 text-xl mb-2'>
											{project.title}
										</h2>
										<p className='text-white text-md'>{project.description}</p>
									</div>
									<div className='pt-4'>
										{project.subtitle.split(', ').map((lang, id) => (
											<span
												key={id}
												className='inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2'
											>
												{lang}
											</span>
										))}
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
