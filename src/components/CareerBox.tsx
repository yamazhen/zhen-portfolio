import { useAppContext } from "@/context/AppContext";
import { Career } from "@/types";
import CareerItem from "./CareerItem";
import { useEffect, useState } from "react";

export default function CareerBox() {
	const { careerMode, setCareerMode } = useAppContext();
	const [career, setCareer] = useState<Career[]>([]);

	// const experience: Career[] = [
	// 	{
	// 		id: 1,
	// 		type: "exp",
	// 		title: "Full Stack Developer",
	// 		institution: "Containerverse Sdn. Bhd.",
	// 		start_date: "2024",
	// 		end_date: "Present",
	// 		descriptions: [
	// 			"Sole developer for HR system used by 200+ employees at a hypermarket chain",
	// 			"Built scalable apps with Spring Boot, Thymeleaf, and MySQL",
	// 			"Handled infrastructure, new features, and critical bug fixes",
	// 		],
	// 		extra: [
	// 			"SpringBoot",
	// 			"JQuery",
	// 			"MySQL",
	// 			"Bootstrap",
	// 			"HTML",
	// 			"CSS",
	// 			"Kubernetes",
	// 			"Javascript",
	// 		],
	// 	},
	// 	{
	// 		id: 2,
	// 		type: "exp",
	// 		title: "Freelance Web Development",
	// 		institution: "Alvin Camba (alvincamba.com)",
	// 		start_date: "2020",
	// 		end_date: "2020",
	// 		descriptions: [
	// 			"Developed CMS-enabled biography site for U.S. professor",
	// 			"Created responsive UI with HTML, CSS, JS, and PHP",
	// 		],
	// 		extra: ["PHP", "Apache", "HTML", "CSS", "MySQL", "Javascript"],
	// 	},
	// ];
	// const education: Career[] = [
	// 	{
	// 		id: 1,
	// 		type: "edu",
	// 		title: "Bachelor of Computer Science",
	// 		institution: "Dongseo University",
	// 		start_date: "2023",
	// 		end_date: "2025",
	// 		descriptions: [
	// 			"Graduated with Outstanding Academic Achievement in my year (CGPA: 4.13/4.5)",
	// 			"Served as a mentor to juniors during my final year in BDAD program",
	// 			"Participated in the DIVE 2024 hackathon event during my studies here",
	// 			"Authored two research papers and received two Excellent Paper Awards",
	// 		],
	// 		extra: [
	// 			"Outstanding Academic Achievement",
	// 			"Excellent Paper Awards",
	// 			"DIVE 2024",
	// 			"BDAD",
	// 		],
	// 	},
	// ];

	useEffect(() => {
		const fetchCareers = async () => {
			try {
				const res = await fetch("/admin/api/careers");
				const data = await res.json();
				setCareer(data);
			} catch {
				console.error("Failed to fetch careers");
			}
		};
		fetchCareers();
	}, []);

	const experience = career
		.filter((item) => item.type === "EXPERIENCE")
		.sort((a, b) => a.display_order - b.display_order);

	const education = career
		.filter((item) => item.type === "EDUCATION")
		.sort((a, b) => a.display_order - b.display_order);

	return (
		<div className="bg-border/30 rounded-sm">
			<div className="flex justify-between items-center text-sm m-0">
				<button
					className={`flex-1 py-3 shine-hover border-accent ${careerMode === "EXPERIENCE" ? "border-inset border-b" : "shine-center"}`}
					onClick={() => setCareerMode("EXPERIENCE")}
				>
					Work
				</button>
				<button
					className={`flex-1 py-3 shine-hover border-accent ${careerMode === "EDUCATION" ? "border-inset border-b" : "shine-center"}`}
					onClick={() => setCareerMode("EDUCATION")}
				>
					Education
				</button>
			</div>
			<div className="flex flex-col justify-center p-8">
				{careerMode === "EXPERIENCE" ? (
					<small className="mb-4">
						<span className="text-accent">~/experience</span> $ cat
						employment_history.json | jq &#39;roles.jq&#39;
					</small>
				) : (
					<small className="mb-4">
						<span className="text-accent">~/education</span> $ awk
						&#39;/graduation/ &#123;print $0&#125;&#39;
						academic_records.log
					</small>
				)}
				<div className="flex flex-col justify-center gap-6 border-l-2 border-accent">
					{careerMode === "EXPERIENCE"
						? experience.map((exp, idx) => {
								return (
									<CareerItem key={`w${idx}`} career={exp} />
								);
							})
						: education.map((edu, idx) => {
								return (
									<CareerItem key={`w${idx}`} career={edu} />
								);
							})}
				</div>
			</div>
		</div>
	);
}
