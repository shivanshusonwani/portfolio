import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

function Contact() {
	const form = useRef();
	const [status, setStatus] = useState(''); // To track "Sending", "Success", or "Error"

	const sendEmail = (e) => {
		e.preventDefault();
		setStatus('sending');

		const templateParams = {
			name: form.current.name.value,
			email: form.current.email.value,
			message: form.current.message.value,
		};

		emailjs
			.send(
				'service_p068wc8',
				// "template_c3bvrph",
				'template_7dcyfoj',
				templateParams,
				'Cg9Tt0S3LvVwIuOJS',
			)
			.then(() => {
				setStatus('success');
				form.current.reset();
			})
			.then(() =>
				toast.success("Message sent! I'll get back to you soon."),
			)
			.catch((error) => {
				console.error(error);
				setStatus('error');
				toast.error('Something went wrong. Try again.');
			});
	};

	return (
		<section id='contact' className='py-20 px-8 md:px-12 bg-white'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-center mb-1 sm:text-4xl'>Send a Message</h2>
				<p className='text-sm text-neutral-500'>
					Fill out the form and I'll respond as soon as possible.
				</p>
				<div className='max-w-2xl mx-auto my-8 p-8 rounded-lg shadow-lg shadow-[#14b8a6]/50 border border-[#14b8a6] text-left'>
					<form ref={form} onSubmit={sendEmail} className='space-y-6'>
						<div>
							<label className='block font-medium text-[#14b8a6] pb-[0.5]'>
								Name
							</label>
							<input
								type='text'
								name='name'
								required
								className='w-full p-2 border border-[#14b8a6] focus:outline-none focus:ring-2 focus:ring-[#14b8a6]  rounded'
							/>
						</div>
						<div>
							<label className='block font-medium text-[#14b8a6] pb-[0.5]'>
								Your Email
							</label>
							<input
								type='email'
								name='email'
								required
								className='w-full p-2 border border-[#14b8a6] focus:outline-none focus:ring-2 focus:ring-[#14b8a6]  rounded'
							/>
						</div>
						<div>
							<label className='block font-medium text-[#14b8a6] pb-[0.5]'>
								Message
							</label>
							<textarea
								name='message'
								required
								className='w-full p-2 border border-[#14b8a6] focus:outline-none focus:ring-2 focus:ring-[#14b8a6]  rounded h-32'
							></textarea>
						</div>

						<button
							type='submit'
							disabled={status === 'sending'}
							className='w-full bg-[#14b8a6] text-white py-2 rounded hover:bg-[#14b8a6]/80 disabled:bg-zinc-300 cursor-pointer'
						>
							{status === 'sending'
								? 'Sending...'
								: 'Send Message'}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
