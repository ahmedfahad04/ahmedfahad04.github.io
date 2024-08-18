import { Link } from 'react-scroll';

export default function Navbar() {
	return (
		<header className='bg-gray-800 sticky top-0 z-10'>
			<div className='font-semibold mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-between'>
				<a className='title-font font-medium text-white mb-4 md:mb-0'>
					<Link
						to='about'
						smooth={true}
						duration={500}
						className='md:ml-5 text-xl flex items-center justify-center cursor-pointer'
					>
						<img src='/logo.png' width={35} height={35}></img>
					</Link>
				</a>

				<nav className='text-white md:flex md:justify-between md:items-center md:ml-4 md:py-1 md:pl-4 md:border-gray-700 text-base'>
					<Link
						to='projects'
						smooth={true}
						duration={500}
						className='px-2 hover:text-secondary cursor-pointer transition-all ease-linear duration-100 hover:scale-105'
					>
						Projects
					</Link>
					<Link
						to='skills'
						smooth={true}
						duration={500}
						className='px-2 hover:text-secondary cursor-pointer transition-all ease-linear duration-100 hover:scale-105'
					>
						Skills
					</Link>
					<Link
						to='contact'
						smooth={true}
						duration={500}
						className='px-2 hover:text-secondary cursor-pointer transition-all ease-linear duration-100 hover:scale-105'
					>
						Contacts
					</Link>
				</nav>

				<a
					href='#contact'
					target='blank'
					className='text-white inline-flex items-cente bg-gray-800 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0'
				>
					{/* facebook icon  */}
					<a
						href='https://www.facebook.com/istiaqahmed.fahad'
						target='blank'
						className='filter grayscale-0 hover:grayscale transition-all ease-linear duration-150'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							x='0px'
							y='0px'
							width='20'
							height='20'
							viewBox='0 0 48 48'
						>
							<linearGradient
								id='Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1'
								x1='9.993'
								x2='40.615'
								y1='9.993'
								y2='40.615'
								gradientUnits='userSpaceOnUse'
							>
								<stop offset='0' stop-color='#2aa4f4'></stop>
								<stop offset='1' stop-color='#007ad9'></stop>
							</linearGradient>
							<path
								fill='url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)'
								d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'
							></path>
							<path
								fill='#fff'
								d='M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z'
							></path>
						</svg>
					</a>

					{/* gmail icon  */}
					<a
						href='https://www.gmail.com'
						target='blank'
						className='filter grayscale-0 hover:grayscale transition-all ease-linear duration-150'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							x='0px'
							y='0px'
							width='20'
							height='20'
							viewBox='0 0 48 48'
							className='mx-2'
						>
							<path
								fill='#4caf50'
								d='M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z'
							></path>
							<path
								fill='#1e88e5'
								d='M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z'
							></path>
							<polygon
								fill='#e53935'
								points='35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17'
							></polygon>
							<path
								fill='#c62828'
								d='M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z'
							></path>
							<path
								fill='#fbc02d'
								d='M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z'
							></path>
						</svg>
					</a>

					{/* linkedin icon  */}
					<a
						href='https://www.linkedin.com/in/ahmedfahad04'
						className='filter grayscale-0 hover:grayscale transition-all ease-linear duration-150'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							x='0px'
							y='0px'
							width='20'
							height='20'
							viewBox='0 0 48 48'
						>
							<path
								fill='#0288D1'
								d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z'
							></path>
							<path
								fill='#FFF'
								d='M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z'
							></path>
						</svg>
					</a>
				</a>
			</div>
		</header>
	);
}
