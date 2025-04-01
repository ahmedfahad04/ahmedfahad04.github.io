import { Button } from './ui/button';

const HeroSection = () => {
	return (
		<section
			id='hero'
			className='relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden'
		>
			<div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/40 z-0'></div>
			<div
				className='absolute inset-0 z-0 opacity-10'
				style={{
					backgroundImage:
						'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
				}}
			></div>

			<div className='container mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative z-10'>
				<div className='text-center md:text-left md:w-1/2 mb-8 md:mb-0 mt-8 md:mt-0'>
					<p className='text-primary font-medium mb-4 no-visible animate-fade-down'>
						SOFTWARE ENGINEER & AI ENTHUSIAST
					</p>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 no-visible animate-fade-up'>
						Istiaq Ahmed Fahad
					</h1>
					<p className='text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed no-visible animate-fade-up'>
						Building innovative solutions with full-stack development and
						machine learning expertise.
					</p>

					<div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4 no-visible animate-fade-up'>
						<Button
							asChild
							className='px-6 py-3 bg-primary text-white hover:bg-primary/90'
						>
							<a href='#experience'>My Experience</a>
						</Button>
						<Button
							asChild
							variant='outline'
							className='px-6 py-3 bg-white text-gray-800 hover:bg-gray-50'
						>
							<a href='/cv.pdf'>Download CV</a>
						</Button>
					</div>
				</div>

				<div className='md:w-2/5 no-visible animate-fade-up'>
					<div className='relative rounded-full overflow-hidden border-4 border-white shadow-xl h-64 w-64 md:h-80 md:w-80 mx-auto'>
						<img
							src='./images/profile.jpeg'
							alt='Istiaq Ahmed Fahad'
							className='w-full h-full object-cover'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay rounded-full'></div>
					</div>
				</div>
			</div>

			{/* <div className="absolute bottom-10 flex transform -translate-x-1/2 no-visible animate-fade-up justify-center items-center">
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Learn More</span>
          <ChevronDown className="animate-bounce" />
        </a>
      </div> */}
		</section>
	);
};

export default HeroSection;
