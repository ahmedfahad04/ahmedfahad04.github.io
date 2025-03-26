import { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';

const Index = () => {
	useEffect(() => {
		// Initialize animation observers
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.remove('no-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.1,
			}
		);

		// Observe all elements with the 'no-visible' class
		document.querySelectorAll('.no-visible').forEach((el) => {
			observer.observe(el);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className='min-h-screen bg-white font-mono'>
			<Header />
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ExperienceSection />
			{/* <NewsSection /> */}
			<AchievementsSection />
			{/* <PublicationsSection /> */}
			<ContactSection />
			<Footer />
		</div>
	);
};

export default Index;
