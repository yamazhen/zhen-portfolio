import { ReactNode } from "react"

interface PageProps {
	first?: boolean;
	children: ReactNode;
	className?: string;
}

export default function PageSection({ first = false, children, className = "" }: PageProps) {
	return (
		<section className={`flex flex-col h-auto min-h-screen ${className} ${first ? "pt-16" : ""} justify-center`}>
			{children}
		</section>
	)
}

