import { GraduationCap, Star } from 'lucide-react';

const AboutSection = () => {
	return (
		<section id='about' className='section-padding bg-white'>
			<div className='container mx-auto px-6 md:px-12'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
					<div className='lg:col-span-7'>
						<h2 className='text-3xl md:text-4xl font-bold font-heading mb-6 no-visible animate-fade-in-right'>
							About Me
						</h2>
						<div className='space-y-4 no-visible animate-fade-in-right '>
							<p className='text-gray-700 leading-relaxed'>
								I'm Istiaq Ahmed Fahad, a Software Engineering graduate from the
								University of Dhaka (B.S. 2024), passionate about full-stack
								development and machine learning. I thrive on building
								innovative solutions to real-world problems.
							</p>
							<p className='text-gray-700 leading-relaxed'>
								My journey includes developing web applications with React,
								Next.js, and NestJS, as well as creating AI-driven tools like
								symptom-to-disease mapping systems. I've also contributed to
								projects like Bengali Automatic Speech Recognition and
								mathematical reasoning for low-resource languages. My time as a
								Trainee Software Engineer at Cefalo Bangladesh Limited was a
								turning point, solidifying my foundation as a software
								developer.
							</p>
							<p className='text-gray-700 leading-relaxed'>
								<b>
									Currently, I'm preparing for my Master's degree, where I plan
									to further specialize in these fields.
								</b>
								Beyond my formal education, I've gained valuable experience as a
								Research Assistant Intern at Data & Design Lab, and I've
								achieved top ranks in Kaggle competitions and received awards at
								innovation fairs.
							</p>
						</div>
					</div>

					<div className='lg:col-span-5'>
						<div className='space-y-6 no-visible animate-fade-up'>
							<div className='glass-card rounded-xl p-6'>
								<h3 className='text-xl font-bold mb-4 flex items-center'>
									<GraduationCap className='mr-3 text-primary' size={24} />
									Education
								</h3>
								<ul className='space-y-3'>
									<li>
										<p className='font-medium'>B.S. in Software Engineering</p>
										<p className='text-gray-600'>
											University of Dhaka, 2019 - 2024
										</p>
									</li>
									<li>
										<p className='font-medium'>
											Higher Secondary Certificate (HSC)
										</p>
										<p className='text-gray-600'>
											Rajuk Uttara Model College, 2017 - 2018
										</p>
									</li>
								</ul>
							</div>

							<div className='glass-card rounded-xl p-6'>
								<h3 className='text-xl font-bold mb-4 flex items-center'>
									<Star className='mr-3 text-primary' size={24} />
									Technical Skills
								</h3>
								<ul className='flex flex-wrap gap-2'>
									<li className='px-3 py-1 bg-primary/10 rounded-full text-primary text-sm'>
										JavaScript
									</li>
									<li className='px-3 py-1 bg-primary/10 rounded-full text-primary text-sm'>
										TypeScript
									</li>
									<li className='px-3 py-1 bg-primary/10 rounded-full text-primary text-sm'>
										Python
									</li>
									<li className='px-3 py-1 bg-primary/10 rounded-full text-primary text-sm'>
										React
									</li>
									<li className='px-3 py-1 bg-primary/10 rounded-full text-primary text-sm'>
										Next.js
									</li>
									<li className='px-3 py-1 bg-primary/10 rounded-full text-primary text-sm'>
										NestJS
									</li>
									<li className='px-3 py-1 bg-primary/10 rounded-full text-primary text-sm'>
										FastAPI
									</li>
									<li className='px-3 py-1 bg-primary/10 rounded-full text-primary text-sm'>
										PyTorch
									</li>
									<li className='px-3 py-1 bg-primary/10 rounded-full text-primary text-sm'>
										Hugging Face
									</li>
									<li className='px-3 py-1 bg-primary/10 rounded-full text-primary text-sm'>
										MongoDB
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
