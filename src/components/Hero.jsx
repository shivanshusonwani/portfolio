import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';

function Hero() {
	return (
		<section
			id='home'
			className='max-w-7xl mx-auto min-h-screen flex items-center justify-center px-8 md:px-12'
		>
			<div className='flex flex-col gap-4 items-center text-center'>
				<h1 className='sm:text-5xl md:text-6xl lg:7xl'>
					Hey, I'm{' '}
					<span className='text-yellow-400 font-black animate-pulse'>
						Shivanshu
					</span>
				</h1>
				<p className='leading-relaxed tracking-wide text-xl md:text-2xl md:max-w-2xl text-zinc-500'>
					I build exceptional digital experiences with React, Node.js,
					Express & MongoDB
				</p>
				<div className='flex justify-center gap-6 my-4 sm:my-8 md:my-12'>
					<button
						onClick={() => scrollToSection('projects')}
						className='px-6 py-3 md:px-8 md:py-4 bg-linear-to-b from-yellow-200 to-yellow-300 rounded-full font-semibold active:scale-95 cursor-pointer transition-transform'
					>
						View My Work
					</button>
					<button
						onClick={() => scrollToSection('contact')}
						className='px-6 py-3 md:px-8 md:py-4 border border-zinc-800 rounded-full font-semibold active:scale-95 cursor-pointer transition-transform'
					>
						Hire Me
					</button>
				</div>
				<div className='flex gap-8 justify-center'>
					<a
						href='https://github.com/shivanshusonwani'
						target='_blank'
						className='hover:text-yellow-400 hover:scale-125  transition-all cursor-pointer'
					>
						<FiGithub className='w-8 h-8' />
					</a>
					<a
						href='https://www.linkedin.com/in/shivanshusonwani/'
						target='_blank'
						className='hover:text-yellow-400 hover:scale-125  transition-all cursor-pointer'
					>
						<FiLinkedin className='w-8 h-8' />
					</a>
					<a
						href='mailto:shivanshusonwani.dev@gmail.com'
						className='hover:text-yellow-400 hover:scale-125  transition-all cursor-pointer'
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
