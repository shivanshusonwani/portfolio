import { FaCode } from 'react-icons/fa6';
import { FiGlobe, FiDatabase, FiSmartphone } from 'react-icons/fi';

function About() {
	return (
		<section
			id='about'
			className='py-20 px-8 mt-0 max-w-7xl mx-auto md:px-12'
		>
			<h2 className='text-center mb-10 sm:text-4xl'>About Me</h2>
			<div className='grid md:grid-cols-2 gap-8 items-center'>
				<div>
					<p className='text-lg leading-relaxed mb-3'>
						I'm a MERN full-stack developer who builds fast,
						scalable, and pixel-perfect web apps from end to end —
						React/Next.js frontends, Node.js + Express backends,
						MongoDB databases, authentication, and clean
						deployments.
					</p>
					<p className='text-lg leading-relaxed mb-3'>
						I ship high-quality code quickly, obsess over
						performance and UX, write maintainable Code, and deliver
						complete products that just work. Reliable, fast, and
						always ready to turn your idea into reality.
					</p>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					{[
						{ icon: <FaCode />, label: 'Clean Code' },
						{ icon: <FiGlobe />, label: 'Web Apps' },
						{ icon: <FiDatabase />, label: 'Backend' },
						{ icon: <FiSmartphone />, label: 'Responsive' },
					].map((skill, i) => (
						<div
							key={i}
							className='flex flex-col justify-center items-center gap-4 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'
						>
							<div className='text-3xl text-[#14b8a6]'>
								{skill.icon}
							</div>
							<p className='text-lg font-semibold'>
								{skill.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default About;
