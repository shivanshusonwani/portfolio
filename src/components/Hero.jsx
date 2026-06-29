import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';
import { useState } from 'react';

function Hero() {
	const [menuOpen, setMenuOpen] = useState(false);

	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	};

	return (
		<section
			id='home'
			className='relative overflow-hidden min-h-screen flex items-center justify-center px-8 md:px-12'
		>
			<div className='absolute inset-0 -z-10 h-full w-full bg-[#ffffff] bg-[radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#14b8a6_100%)] bg-size-[100%_100%]'></div>
			<div className='flex flex-col gap-4 items-center text-center'>
				<h1 className='text-left'>
					<span className='text-xl'>Hello, I'm</span>
					<br />
					<span className='text-[#14b8a6] text-5xl md:text-6xl lg:text-8xl font-black animate-pulse'>
						Shivanshu
					</span>
				</h1>
				<p className='leading-relaxed tracking-wide text-xl md:text-2xl md:max-w-2xl text-zinc-500'>
					Full-stack developer building scalable web applications from
					architecture and development to deployment.
				</p>
				<div className='flex justify-center gap-6 my-4 md:my-8'>
					<button
						onClick={() => scrollToSection('projects')}
						className='px-6 py-3 md:px-8 md:py-4 bg-[#14b8a6] text-white rounded-full font-semibold active:scale-95 hover:scale-[1.05] cursor-pointer transition-transform'
					>
						View My Work
					</button>
					<button
						onClick={() => scrollToSection('contact')}
						className='px-6 py-3 md:px-8 md:py-4 border border-[#14b8a6] text-[#14b8a6] rounded-full font-semibold active:scale-95 hover:scale-[1.05] cursor-pointer transition-transform'
					>
						Contact Me
					</button>
				</div>
				<div className='flex gap-8 justify-center'>
					<a
						href='https://github.com/shivanshusonwani'
						target='_blank'
						className='hover:text-[#14b8a6] hover:scale-125  transition-all cursor-pointer'
					>
						<FiGithub className='w-8 h-8' />
					</a>
					<a
						href='https://www.linkedin.com/in/shivanshusonwani/'
						target='_blank'
						className='hover:text-[#14b8a6] hover:scale-125  transition-all cursor-pointer'
					>
						<FiLinkedin className='w-8 h-8' />
					</a>
					<a
						href='mailto:shivanshusonwani.dev@gmail.com'
						className='hover:text-[#14b8a6] hover:scale-125  transition-all cursor-pointer'
					>
						<FiMail className='w-8 h-8' />
					</a>
				</div>
			</div>
			<div className='text-zinc-400 absolute bottom-10 animate-bounce'>
				<FaAngleDown size={30} />
			</div>
		</section>
	);
}

export default Hero;
