import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"; // Using regular calendar icon for Calendly

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faLinkedin} className="social-icon" />
					</div>
					<div className="social-text">Connect on LinkedIn</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faInstagram} className="social-icon" />
					</div>
					<div className="social-text">Follow on Instagram</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.calendly} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faCalendarAlt} className="social-icon" />
					</div>
					<div className="social-text">Book on Calendly</div>
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
