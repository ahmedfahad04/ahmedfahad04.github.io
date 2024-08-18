import { GraduationCap } from 'lucide-react';
import ExperienceCard from '../../elements/ExperienceCard';
import { experiences } from './data';

const Experience = () => {
	return (
		<section
			id='experience'
			className='text-gray-400 bg-gray-900 body-font h-screen flex items-center justify-center'
		>
			<div className='container px-5 py-10 mx-auto text-center lg:px-40 h-full'>
				<div className='flex flex-col w-full h-[15%] '>
					<div className='mx-auto inline-block w-10 mb-4'>
						<GraduationCap />
					</div>

					<h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
						Experience
					</h1>
				</div>
				<div className=' h-[80%] p-4 overflow-y-auto max-h-[100%]'>
					{experiences.map((exp, idx) => (
						<div key={idx} className='my-2'>
							<ExperienceCard
								imageUrl={exp.imageUrl}
								designation={exp.designation}
								organization={exp.organization}
								timeline={exp.timeline}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
