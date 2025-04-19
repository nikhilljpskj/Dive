import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	const form = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_rmlj3bx",
				"template_g8bzyg9",
				form.current,
				"4le-FLTEUK-j5QlZm"
			)
			.then(
				(result) => {
					alert("Message sent successfully!");
				},
				(error) => {
					alert("Failed to send the message, please try again.");
				}
			);
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
						Let’s connect to discuss your hiring needs. You can reach me at <a href="mailto:divedevadas@gmail.com">divedevadas@gmail.com</a> or use the form below.
						</div>

						<form ref={form} onSubmit={sendEmail} className="contact-form">
							<input type="text" name="user_name" placeholder="Your Name" required />
							<input type="email" name="user_email" placeholder="Your Email" required />
							<textarea name="message" placeholder="Your Message" required />
							<button type="submit">Send Message</button>
						</form>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;