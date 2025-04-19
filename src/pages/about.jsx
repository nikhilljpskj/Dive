import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

// Add EducationIcon component (if you have one, otherwise import an icon)
import { FaCertificate } from "react-icons/fa"; // Example: Using FontAwesome for certificate icon

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
									{/* Education Section */}
									<div className="about-education">
									<div className="education-title">Education</div>
									
									{/* Education Details */}
									<div className="education-item">
										<FaCertificate className="education-icon" />
										<div className="education-details">
											<h4>CHANDIGARH UNIVERSITY</h4>
											<p>Doctor of Philosophy - PhD, Human Resources Management and Services</p>
											<p>Jan 2024 - Feb 2027</p>
										</div>
									</div>

									<div className="education-item">
										<FaCertificate className="education-icon" />
										<div className="education-details">
											<h4>CHANDIGARH UNIVERSITY</h4>
											<p>MBA Strategic HR (HR+Marketing) Dual Specialization/SHRM, Human Resources Management and Services</p>
											<p>2020 - 2022</p>
										</div>
									</div>

									<div className="education-item">
										<FaCertificate className="education-icon" />
										<div className="education-details">
											<h4>University of Kerala</h4>
											<p>Bachelor of Business Administration, Tourism Management</p>
											<p>2016 - 2019</p>
										</div>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
									
								</div>

								<div className="about-socials">
									<Socials />
								</div>
								<div className="certifications-section">
									<div className="certifications-title">Certifications</div>
									<div className="certifications-images">
										<div className="certification-image">
											<img
												src="../Lev1.png"
												alt="Certification 1"
												className="certification-img"
											/>
										</div>
										<div className="certification-image">
											<img
												src="../bls.png"
												alt="Certification 2"
												className="certification-img"
											/>
										</div>
									</div>
								</div>
							
							</div>
						</div>
						<div className="about-socials-mobile">
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

export default About;
