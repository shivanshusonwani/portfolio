import { useState } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import FeaturedProjects from './components/FeaturedProject.jsx';
import Contact from './components/Contact.jsx';

function App() {
	return (
		<>
			{/* Header */}
			<Header />

			{/* Hero Section */}
			<Hero />

			{/* About Section */}
			<About />

			{/* Project Section */}
			<FeaturedProjects />

			{/* Contact Section */}
			<Contact />

			{/* Footer */}
			<Footer />
		</>
	);
}

export default App;
