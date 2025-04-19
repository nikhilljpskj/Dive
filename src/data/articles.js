import React from "react";

function article_1() {
	return {
		date: "20 April 2025",
		title: "Mastering Talent Acquisition in the Travel Industry",
		description:
			"Explore advanced recruitment strategies specific to the travel sector, and how targeted sourcing and VMS mastery can lead to exceptional talent matches.",
		keywords: [
			"Talent Acquisition",
			"Travel Recruitment",
			"Dive Devadas",
			"VMS platforms",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">An in-depth look into effective talent acquisition techniques within the travel industry, including VMS navigation, locum tenens placement, and compliance strategies.</div>
					<img
						src="https://picsum.photos/200/300"
						alt="recruitment"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "20 April 2025",
		title: "Leveraging ATS Tools for Efficient Hiring",
		description:
			"Learn how tools like Nexus, SAP Fieldglass, and Workday are reshaping the way HR professionals manage recruitment workflows.",
		style: ``,
		keywords: [
			"ATS Tools",
			"Nexus",
			"Recruitment Software",
			"Dive Devadas",
		],
		body: (
			<React.Fragment>
				<h1>Explore how modern ATS platforms streamline sourcing, screening, and compliance for HR specialists across industries.</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "20 April 2025",
		title: "Navigating Compliance in US Healthcare Recruitment",
		description:
			"A comprehensive guide to handling compliance, credentialing, and timesheet management within the healthcare staffing domain.",
		style: ``,
		keywords: [
			"Healthcare Recruitment",
			"US Compliance",
			"Credentialing",
			"Dive Devadas",
		],
		body: (
			<React.Fragment>
				<p>Get familiar with the key elements of managing recruitment operations for locum tenens and W2 staffing including timesheets and regulatory procedures.</p>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "20 April 2025",
		title: "Client Engagement Best Practices in Staffing",
		description:
			"Understand how effective communication, complaint resolution, and relationship-building foster long-term client satisfaction.",
		style: ``,
		keywords: [
			"Client Engagement",
			"Staffing",
			"HR Communication",
			"Dive Devadas",
		],
		body: (
			<React.Fragment>
				<p>Master the art of connecting with clients through structured feedback loops, transparent workflows, and quick problem-solving in the recruitment space.</p>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: "20 April 2025",
		title: "Tourism Management Meets HR: A Strategic Perspective",
		description:
			"Dive into the intersection of strategic HR and tourism, exploring how industry insights drive effective workforce planning.",
		style: ``,
		keywords: [
			"Tourism HR",
			"Strategic HR",
			"Workforce Planning",
			"Dive Devadas",
		],
		body: (
			<React.Fragment>
				<p>Tourism and HR share a lot more than expected. This article breaks down how recruitment insights can boost efficiency in hospitality and travel sector hiring.</p>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4, article_5];

export default myArticles;
