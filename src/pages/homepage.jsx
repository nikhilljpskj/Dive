import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						
						<div className="homepage-socials">
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={INFO.socials.calendly}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faCalendarAlt}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						
						<div className="clients-section">
							<h2 className="clients-heading">Clients I’ve Worked With</h2>
							<div className="clients-scroll-wrapper">
								<div className="clients-scroll">
									<img src="../client1.jpg" alt="Client 1" />
									<img src="../client2.png" alt="Client 2" />
									<img src="../client3.webp" alt="Client 3" />
									<img src="../client4.jpg" alt="Client 4" />
									<img src="../client5.png" alt="Client 5" />
									<img src="../Client6.png" alt="Client 6" />
									<img src="../client7.png" alt="Client 6" />
									<img src="../client8.png" alt="Client 6" />
									<img src="../client9.png" alt="Client 6" />
									<img src="../client10.png" alt="Client 6" />
									<img src="../client12.png" alt="Client 6" />
									<img src="../client13.png" alt="Client 6" />
									<img src="../client14.png" alt="Client 6" />
									<img src="../client15.png" alt="Client 6" />
									<img src="../client16.png" alt="Client 6" />
									<img src="../client17png" alt="Client 6" />
									<img src="../client18png" alt="Client 6" />
									<img src="../client19.png" alt="Client 6" />
									<img src="../client20.png" alt="Client 6" />
										{/* Duplicate first 6 images for smooth scroll */}
									<img src="../client1.jpg" alt="Client 1" />
									<img src="../client2.png" alt="Client 2" />
									<img src="../client3.webp" alt="Client 3" />
									<img src="../client4.jpg" alt="Client 4" />
									<img src="../client5.png" alt="Client 5" />
									<img src="../Client6.png" alt="Client 6" />
								</div>
							</div>
						</div>



						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
