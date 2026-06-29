import Projects from '../data/projects.js';

import { FiExternalLink, FiGithub } from 'react-icons/fi';

function FeaturedProjects() {
	return (
		<section
			id='projects'
			className='py-20 px-8  md:px-12 bg-linear-to-tr from-[#14b8a6] to-white'
		>
			<h2 className='text-center mb-10 sm:text-4xl'>Featured Projects</h2>
			<div className='flex flex-col gap-8 justify-center max-w-5xl mx-auto'>
				{Projects.map((project, i) => (
					<div
						key={i}
						className=' p-6 rounded-2xl bg-white shadow-lg hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between'
					>
						<div>
							<h3 className='text-2xl font-bold py-3'>
								{project.title}
							</h3>
							<p className='text-zinc-500 font-semibold tracking-wide mb-4'>
								{project.desc}
							</p>
						</div>
						<div>
							<div className='flex flex-wrap my-4 gap-2'>
								{project.tech.map((tech, key) => (
									<span
										key={key}
										className='bg-zinc-800 text-zinc-100 text-sm font-bold rounded-2xl px-3 py-1'
									>
										{tech}
									</span>
								))}
							</div>

							<div className='flex gap-6 text-lg font-semibold'>
								<a
									href={project.live}
									target='_blank'
									className='flex   text-[#14b8a6]  items-center  gap-2 cursor-pointer hover:underline underline-offset-4'
								>
									<FiExternalLink className='w-4 h-4' /> Live
									Demo
								</a>
								<a
									href={project.code}
									target='_blank'
									className='flex items-center  gap-2 text-zinc-700 hover:underline underline-offset-4'
								>
									<FiGithub className='w-4 h-4' /> Code
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default FeaturedProjects;
