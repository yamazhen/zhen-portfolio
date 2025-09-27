import { Career } from "@/types";
import { ArrowRight } from "lucide-react";

type CareerProps = {
	career: Career;
};

export default function CareerItem({ career }: CareerProps) {
	return (
		<div className="pl-8">
			<div className="border border-border p-6 border-hover-animate rounded-sm hover:translate-x-1">
				<div className="flex justify-between items-center mb-4 max-lg:flex-col max-lg:justify-center max-lg:items-start max-lg:gap-4">
					<h3 className="font-bold max-lg:text-sm text-lg flex items-center gap-2 max-lg:flex-col max-lg:justify-center max-lg:items-start">
						{career.title}{" "}
						<span className="text-accent text-sm max-lg:text-[10px]">
							@{career.institution}
						</span>
					</h3>
					<div className="text-xs bg-border px-3 py-1.5 flex items-center gap-1">
						{new Date(career.start_date).getFullYear()}
						<ArrowRight strokeWidth={1.5} size={12} />
						{career.end_date
							? new Date(career.end_date).getFullYear()
							: "Present"}
					</div>
				</div>
				<ul className="text-muted text-sm list-disc pl-3 flex flex-col justify-center gap-0.5 mb-4 max-lg:text-[10px]">
					{career.descriptions.map((desc, idx) => {
						return <li key={`c${career.id}-d${idx}`}>{desc}</li>;
					})}
				</ul>
				<ul className="flex flex-wrap items-center gap-2">
					{career.type === "EXPERIENCE"
						? career.extra.map((extra, idx) => (
								<li
									key={`c${career.id}-e${idx}`}
									className="text-xs bg-border max-lg:p-1 px-3 py-1.5 max-lg:text-[8px]"
								>
									{extra}
								</li>
							))
						: career.extra.map((extra, idx) => (
								<li
									key={`c${career.id}-e${idx}`}
									className="text-xs max-lg:p-1 glass-hover max-lg:text-[8px] bg-accent/25 border-accent border px-3 py-1.5"
								>
									{extra}
								</li>
							))}
				</ul>
			</div>
		</div>
	);
}
