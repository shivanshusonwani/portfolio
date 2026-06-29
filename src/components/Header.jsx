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
			<header className='w-full fixed bg-transparent backdrop-blur-xl z-50 shadow-md'>
				<div className='flex justify-between items-center pt-8 pb-2 px-8 max-w-7xl mx-auto text-zinc-800 md:text-lg'>
					<p className='text-xl font-mono font-bold md:text-2xl'>
						shivanshu sonwani
					</p>

					{/* Navigation */}
					<nav className=''>
						<div className='hidden md:flex gap-8'>
							{section.map((item) => (
								<button
									key={item}
									onClick={() =>
										scrollToSection(item.toLowerCase())
									}
									className='hover:text-[#14b8a6] hover:underline underline-offset-4 cursor-pointer px-3 py-1 transition-all duration-200'
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
						<nav className='md:hidden absolute top-full left-0 w-full bg-[#14b8a6]/80'>
							{section.map((item) => (
								<button
									key={item}
									onClick={() =>
										scrollToSection(item.toLowerCase())
									}
									className='block w-full text-left px-8 py-4 hover:bg-[#14b8a6]/70'
								>
									{item}
								</button>
							))}
						</nav>
					)}
				</div>
			</header>
			{menuOpen && (
				<div className='bg-[#14b8a6]/50 fixed inset-0  backdrop-blur-xs z-40 w-screen h-screen'></div>
			)}
		</>
	);
}

export default Header;
