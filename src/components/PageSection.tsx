import { ReactNode } from "react"

interface PageProps {
	first?: boolean;
	children: ReactNode;
}

export default function PageSection({ first = false, children }: PageProps) {
	return (
		<section className={`flex flex-col h-screen ${first ? "pt-16" : ""} justify-center`}>
			{children}
		</section>
	)
}

