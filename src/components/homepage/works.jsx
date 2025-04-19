import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{/* LanceSoft */}
						<div className="work">
							<div className="work-header">
								<img src="./lancesoft.png" alt="LanceSoft, Inc." className="work-image" />
								<div className="work-title">LanceSoft, Inc.</div>
							</div>
							<div className="work-details">
								<div className="work-subtitle">Senior Executive / Senior Specialist (Delivery)</div>
								<div className="work-duration">Jan 2025 – Present · 4 mos · Sterling, VA · On-site</div>
							</div>
						</div>

						{/* Cynet Corp as a Tree */}
						<div className="work">
							<div className="work-header">
								<img src="./cynet.png" alt="Cynet Corp" className="work-image" />
								<div className="work-title">Cynet Corp</div>
							</div>
							<div className="work-details">
								<div className="work-role">
									<div className="work-subtitle">Talent Acquisition Specialist</div>
									<div className="work-duration">Jul 2024 – Dec 2024 · 6 mos</div>
								</div>
								<div className="work-role">
									<div className="work-subtitle">Sr. Talent Acquisition Associate</div>
									<div className="work-duration">Feb 2024 – Jun 2024 · 5 mos</div>
								</div>
								<div className="work-role">
									<div className="work-subtitle">Talent Acquisition Associate</div>
									<div className="work-duration">Jun 2023 – Jan 2024 · 8 mos</div>
								</div>
								<div className="work-role">
									<div className="work-subtitle">Talent Acquisition Trainee</div>
									<div className="work-duration">Mar 2023 – May 2023 · 3 mos</div>
								</div>
							</div>
						</div>

						{/* Redeemer */}
						<div className="work">
							<div className="work-header">
								<img src="./redeemer.png" alt="Redeemer" className="work-image" />
								<div className="work-title">Redeemer Technologies Pvt Ltd</div>
							</div>
							<div className="work-details">
								<div className="work-subtitle">Human Resources Executive (Internship)</div>
								<div className="work-duration">Aug 2022 – Dec 2022 · 5 mos · Kerala, India · Hybrid</div>
							</div>
						</div>
					</div>

				}
			/>
		</div>
	);
};

export default Works;
