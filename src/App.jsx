import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import {
	FiGlobe,
	FiDatabase,
	FiSmartphone,
	FiExternalLink,
	FiGithub,
	FiMail,
	FiLinkedin,
} from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMenuOpen(false);
	};

	const projects = [
		{
			imgSrc: "/codesense.png",
			title: "CodeSense AI",
			desc: "A modern MERN Code Review app featuring an in-browser code editor, rich Markdown output, Highlight.js themes, and Gemini AI integration for automated, high-quality code reviews.",
			tech: ["React", "Node.js", "Express", "Google GenAI", "Tailwind"],
			live: "https://codesense-ai-p75q.onrender.com",
			code: "https://github.com/shivanshusonwani/CodeSense.AI",
		},
		{
			imgSrc: "/todo.png",
			title: "To Do",
			desc: "A lightweight Microsoft To Do–inspired task manager with add, delete, complete, and important task features, secured with JWT-based user authentication.",
			tech: ["React", "Tailwind", "JavaScript", "Express","MongoDB"],
			live: "https://clone-ms-todo.netlify.app/",
			code: "https://github.com/shivanshusonwani/todo",
		},
		// {
		// 	imgSrc: "/pinboard.png",
		// 	title: "PinBoard",
		// 	desc: "A clean and minimal Notes App inspired by Google Keep. Users can create, save, and manage notes with an expanding input UI. Notes are stored locally using localStorage, ensuring data persists even after refreshing the page.",
		// 	tech: ["React", "Tailwind", "JavaScript", "LocalStorage"],
		// 	live: "https://pinboard-3hgl.onrender.com",
		// 	code: "https://github.com/shivanshusonwani/PinBoard",
		// },
	];

	return (
		<>
			{/* Header */}
			<header className='flex justify-between items-center pt-6 pb-2 px-8 fixed top-0 w-full z-10 mx-auto bg-zinc-800 text-zinc-100 md:text-lg'>
				<p className='text-xl font-mono font-bold md:text-2xl'>
					shivanshu sonwani
				</p>

				{/* Navigation */}
				<nav className=''>
					<div className='hidden md:flex gap-12'>
						{["Home", "About", "Projects", "Contact"].map((item) => (
							<button
								key={item}
								onClick={() => scrollToSection(item.toLowerCase())}
								className='hover:text-yellow-500 cursor-pointer px-3 py-1 transition-colors'>
								{item}
							</button>
						))}
					</div>
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className='md:hidden cursor-pointer'>
						{menuOpen ? <IoClose size={30} /> : <LuMenu size={30} />}
					</button>
				</nav>
				{/* Mobile Menu */}
				{menuOpen && (
					<nav className='md:hidden absolute top-full left-0 w-full bg-zinc-700'>
						{["Home", "About", "Projects", "Contact"].map((item) => (
							<button
								key={item}
								onClick={() => scrollToSection(item.toLowerCase())}
								className='block w-full text-left px-8 py-4 hover:bg-zinc-800/70'>
								{item}
							</button>
						))}
					</nav>
				)}
			</header>

			{menuOpen && (
				<div className='bg-yellow-50/60 z-5 backdrop-blur-xs w-screen h-screen fixed '></div>
			)}

			{/* Hero Section */}
			<section
				id='home'
				className='max-w-7xl mx-auto min-h-screen flex items-center justify-center px-8 md:px-12'>
				<div className='flex flex-col gap-4 items-center text-center'>
					<h1 className='sm:text-5xl md:text-6xl lg:7xl'>
						Hey, I'm{" "}
						<span className='text-yellow-400 font-black animate-pulse'>
							Shivanshu
						</span>
					</h1>
					<p className='leading-relaxed tracking-wide text-xl md:text-2xl md:max-w-2xl text-zinc-500'>
						I build exceptional digital experiences with React, Node.js, Express
						& MongoDB
					</p>
					<div className='flex justify-center gap-6 my-4 sm:my-8 md:my-12'>
						<button
							onClick={() => scrollToSection("projects")}
							className='px-6 py-3 md:px-8 md:py-4 bg-linear-to-b from-yellow-200 to-yellow-300 rounded-full font-semibold active:scale-95 cursor-pointer transition-transform'>
							View My Work
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className='px-6 py-3 md:px-8 md:py-4 border border-zinc-800 rounded-full font-semibold active:scale-95 cursor-pointer transition-transform'>
							Hire Me
						</button>
					</div>
					<div className='flex gap-8 justify-center'>
						<a
							href='https://github.com/shivanshusonwani'
							target='_blank'
							className='hover:text-yellow-400 hover:scale-125  transition-all cursor-pointer'>
							<FiGithub className='w-8 h-8' />
						</a>
						<a
							href='https://www.linkedin.com/in/shivanshusonwani/'
							target='_blank'
							className='hover:text-yellow-400 hover:scale-125  transition-all cursor-pointer'>
							<FiLinkedin className='w-8 h-8' />
						</a>
						<a
							href='mailto:shivanshusonwani.dev@gmail.com'
							className='hover:text-yellow-400 hover:scale-125  transition-all cursor-pointer'>
							<FiMail className='w-8 h-8' />
						</a>
					</div>
				</div>
				<div className='text-zinc-400 absolute bottom-10 animate-bounce'>
					<FaAngleDown size={30} />
				</div>
			</section>

			{/* About Section */}
			<section
				id='about'
				className='pt-20 px-8 mt-0 max-w-7xl mx-auto md:px-12'>
				<h2 className='text-center mb-10 sm:text-4xl'>About Me</h2>
				<div className='grid md:grid-cols-2 gap-8 items-center'>
					<div>
						<p className='text-lg leading-relaxed mb-3'>
							I'm a MERN full-stack developer who builds fast, scalable, and
							pixel-perfect web apps from end to end — React/Next.js frontends,
							Node.js + Express backends, MongoDB databases, authentication, and
							clean deployments.
						</p>
						<p className='text-lg leading-relaxed mb-3'>
							I ship high-quality code quickly, obsess over performance and UX,
							write maintainable Code, and deliver complete products that just
							work. Reliable, fast, and always ready to turn your idea into
							reality.
						</p>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						{[
							{ icon: <FaCode />, label: "Clean Code" },
							{ icon: <FiGlobe />, label: "Web Apps" },
							{ icon: <FiDatabase />, label: "Backend" },
							{ icon: <FiSmartphone />, label: "Responsive" },
						].map((skill, i) => (
							<div
								key={i}
								className='flex flex-col justify-center items-center gap-4 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
								<div className='text-3xl text-yellow-500'>{skill.icon}</div>
								<p className='text-lg font-semibold'>{skill.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Project Section */}
			<section
				id='projects'
				className='pt-20 px-8 max-w-7xl mx-auto md:px-12'>
				<h2 className='text-center mb-10 sm:text-4xl'>Featured Projects</h2>
				<div className='flex flex-wrap justify-center gap-8'>
					{projects.map((project, i) => (
						<div
							key={i}
							className='p-6 rounded-2xl bg-linear-to-tl from-yellow-50 to-yellow-100/80 shadow-lg hover:scale-105 transition-transform duration-300 max-w-90 flex flex-col justify-between'>
							<div>
								<img
									src={`${import.meta.env.BASE_URL}/${project.imgSrc}`}
									alt='project screenshot'
									className='object-cover rounded'
								/>
								<h3 className='text-2xl font-bold py-3'>{project.title}</h3>
								<p className='text-zinc-500 font-semibold tracking-wide mb-4'>
									{project.desc}
								</p>
							</div>
							<div>
								<div className='flex flex-wrap my-4 gap-2'>
									{project.tech.map((tech, key) => (
										<span
											key={key}
											className='bg-zinc-800 text-zinc-100 text-sm font-bold rounded-2xl px-3 py-1'>
											{tech}
										</span>
									))}
								</div>

								<div className='flex gap-6 text-lg font-semibold'>
									<a
										href={project.live}
										target='_blank'
										className='flex   text-yellow-500  items-center  gap-2 cursor-pointer hover:underline underline-offset-4'>
										<FiExternalLink className='w-4 h-4' /> Live Demo
									</a>
									<a
										href={project.code}
										target='_blank'
										className='flex items-center  gap-2 text-zinc-700 hover:underline underline-offset-4'>
										<FiGithub className='w-4 h-4' /> Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Contact Section */}
			<section
				id='contact'
				className='py-25 px-8 max-w-7xl mx-auto md:px-12'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-4xl font-bold mb-10'>Let's Work Together</h2>
					<p className='text-xl mb-12'>
						Have a project in mind? Let's bring it to life.
					</p>
					<a
						href='mailto:shivanshusonwani.dev@gmail.com'
						className='inline-flex items-center gap-3 px-10 py-5 font-semibold rounded-full bg-linear-to-b from-yellow-200 to-yellow-300 cursor-pointer active:scale-95 transition-transform'>
						<FiMail className='w-6 h-6' />
						Get In Touch
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className='py-8 border-t border-zinc-300 text-center '>
				<p>Shivanshu Sonwani • Software Developer • 2025</p>
			</footer>
		</>
	);
}

export default App;
