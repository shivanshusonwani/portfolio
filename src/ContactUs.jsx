import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactUs = () => {
	const form = useRef();
	const [status, setStatus] = useState(""); // To track "Sending", "Success", or "Error"

	const sendEmail = (e) => {
		e.preventDefault();
		setStatus("sending");

		const templateParams = {
			name: form.current.name.value,
			email: form.current.email.value,
			message: form.current.message.value,
		};

		emailjs
			.send(
				"service_p068wc8",
				// "template_c3bvrph",
				"template_7dcyfoj",
				templateParams,
				"Cg9Tt0S3LvVwIuOJS",
			)
			.then(() => {
				setStatus("success");
				form.current.reset();
			})
			.then(() => toast.success("Message sent! I'll get back to you soon."))
			.catch((error) => {
				console.error(error);
				setStatus("error");
				toast.error("Something went wrong. Try again.");
			});
	};

	return (
		<div className='max-w-md mx-auto my-8 p-6 rounded-lg shadow-lg'>
			<h2 className='text-2xl font-bold mb-4'>Contact Me</h2>

			<form
				ref={form}
				onSubmit={sendEmail}
				className='space-y-4'>
				<div>
					<label className='block text-sm font-medium'>Name</label>
					<input
						type='text'
						name='name'
						required
						className='w-full p-2 border rounded'
					/>
				</div>
				<div>
					<label className='block text-sm font-medium'>Your Email</label>
					<input
						type='email'
						name='email'
						required
						className='w-full p-2 border rounded'
					/>
				</div>
				<div>
					<label className='block text-sm font-medium'>Message</label>
					<textarea
						name='message'
						required
						className='w-full p-2 border rounded h-32'></textarea>
				</div>

				<button
					type='submit'
					disabled={status === "sending"}
					className='w-full bg-zinc-800 text-white py-2 rounded hover:bg-zinc-700 disabled:bg-zinc-300 cursor-pointer'>
					{status === "sending" ? "Sending..." : "Send Message"}
				</button>
			</form>
		</div>
	);
};

export default ContactUs;
