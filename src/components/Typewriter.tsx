"use client";

import { useEffect, useState } from "react";

type TypeWriteProp = {
	text: string
	speed?: number;
	className?: string
}

function Typewriter({ text, speed = 50, className }: TypeWriteProp) {
	const [displayText, setDisplayText] = useState<string>("")
	const [currentIndex, setCurrentIndex] = useState<number>(0)

	useEffect(() => {
		setDisplayText("")
		setCurrentIndex(0)
	}, [text])

	useEffect(() => {
		if (currentIndex >= text.length) return;

		const timer = setTimeout(() => {
			setDisplayText(prev => prev + text[currentIndex]);
			setCurrentIndex(prev => prev + 1)
		}, speed)

		return () => clearTimeout(timer);
	}, [currentIndex, text, speed])


	return (
		<h1 className={className}>
			{displayText}
			<span className="animate-blink">|</span>
		</h1>
	)
}

export default Typewriter
