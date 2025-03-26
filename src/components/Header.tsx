import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'py-4 bg-white/90 backdrop-blur-md shadow-sm'
					: 'py-6 bg-transparent'
			}`}
		>
			<div className='container mx-auto px-6 md:px-12 flex justify-between items-center'>
				<a href='#hero' className='text-xl font-heading font-medium'>
					Istiaq Ahmed Fahad
				</a>

				{/* Desktop Navigation */}
				<nav className='hidden font-heading md:flex items-center space-x-8'>
					{[
						'About',
						'Skills',
						'Projects',
						'Experience',
						// 'News',
						'Achievements',
						// 'Publications',
						'Contact',
					].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className='text-sm font-medium text-gray-700 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full'
						>
							{item}
						</a>
					))}
				</nav>

				{/* Mobile Menu Toggle */}
				<button
					className='md:hidden text-gray-700 focus:outline-none'
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-6 px-6 animate-fade-down'>
					<nav className='flex flex-col space-y-4'>
						{[
							'About',
							'Projects',
							'Experience',
							'News',
							'Achievements',
							'Publications',
							'Contact',
						].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className='text-base font-medium text-gray-700 hover:text-primary transition-colors py-2'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
