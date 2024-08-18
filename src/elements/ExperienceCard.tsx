interface ExperienceCardProps {
	imageUrl: string;
	designation: string;
	organization: string;
	timeline: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
	return (
		<div className='text-white flex flex-row justify-centre items-center gap-2'>
			<div className='w-1/5 flex justify-end '>
				<img
					src={props.imageUrl}
					width={80}
					height={75}
					className='rounded-l-lg'
				/>
			</div>
			<div className='w-3/5 text-start bg-gray-800 flex flex-col lg:flex-row justify-between p-2 gap-4 lg:gap-0 rounded-r-lg'>
				<div>
					<p className='text-2xl font-bold text-secondary'>
						{props.organization}
					</p>
					<p className='text-lg'>{props.designation}</p>
				</div>
				<div>
					<p className='text-sm font-light italic'>{props.timeline}</p>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
