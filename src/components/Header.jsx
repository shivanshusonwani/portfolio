import { useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';

function Header() {
	const section = ['Home', 'About', 'Projects', 'Contact'];

	const [menuOpen, setMenuOpen] = useState(false);

	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	};

	return (
		<>
			<header className='flex justify-between items-center pt-6 pb-2 px-8 fixed top-0 w-full z-10 mx-auto bg-zinc-800 text-zinc-100 md:text-lg'>
				<p className='text-xl font-mono font-bold md:text-2xl'>
					shivanshu sonwani
				</p>

				{/* Navigation */}
				<nav className=''>
					<div className='hidden md:flex gap-12'>
						{section.map((item) => (
							<button
								key={item}
								onClick={() =>
									scrollToSection(item.toLowerCase())
								}
								className='hover:text-yellow-500 cursor-pointer px-3 py-1 transition-colors'
							>
								{item}
							</button>
						))}
					</div>
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className='md:hidden cursor-pointer'
					>
						{menuOpen ? (
							<IoClose size={30} />
						) : (
							<LuMenu size={30} />
						)}
					</button>
				</nav>
				{/* Mobile Menu */}
				{menuOpen && (
					<nav className='md:hidden absolute top-full left-0 w-full bg-zinc-700'>
						{section.map((item) => (
							<button
								key={item}
								onClick={() =>
									scrollToSection(item.toLowerCase())
								}
								className='block w-full text-left px-8 py-4 hover:bg-zinc-800/70'
							>
								{item}
							</button>
						))}
					</nav>
				)}
			</header>

			{menuOpen && (
				<div className='bg-yellow-50/60 z-5 backdrop-blur-xs w-screen h-screen fixed '></div>
			)}
		</>
	);
}

export default Header;
