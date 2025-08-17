import { Career } from "@/types";
import { ArrowRight } from "lucide-react";

type CareerProps = {
	career: Career;
}

export default function CareerItem({ career }: CareerProps) {
	return (
		<div className="pl-8">
			<div className="border border-border p-6 border-hover-animate rounded-sm hover:translate-x-1">
				<div className="flex justify-between items-center mb-4 max-md:flex-col max-md:justify-center max-md:items-start max-md:gap-4">
					<h3 className="font-bold max-md:text-base text-lg flex items-center gap-2 max-md:flex-col max-md:justify-center max-md:items-start">{career.title} <span className="text-accent text-sm max-md:text-xs">@{career.institution}</span></h3>
					<div className="text-xs bg-border px-3 py-1.5 flex items-center gap-1">
						{career.start_date}
						<ArrowRight strokeWidth={1.5} size={12} />
						{career.end_date}
					</div>
				</div>
				<ul className="text-muted text-sm list-disc pl-3 flex flex-col justify-center gap-0.5 mb-4 max-md:text-xs">
					{career.descriptions.map((desc, idx) => {
						return (
							<li key={`c${career.id}-d${idx}`}>{desc}</li>
						)
					})}
				</ul>
				<ul className="flex flex-wrap items-center gap-2">
					{career.type === "exp" ? (
						career.extra.map((extra, idx) => (
							<li key={`c${career.id}-e${idx}`}
								className="text-xs bg-border max-md:p-1 px-3 py-1.5 max-md:text-[8px]">{extra}</li>
						))
					) : (
						career.extra.map((extra, idx) => (
							<li key={`c${career.id}-e${idx}`}
								className="text-xs max-md:p-1 glass-hover max-md:text-[8px] bg-accent/25 border-accent border px-3 py-1.5">{extra}</li>
						))
					)}
				</ul>
			</div>
		</div>
	)
}
