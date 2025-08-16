
"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		}

		window.addEventListener("mousemove", handleMouseMove)


		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [])

	return (
		<div
			className="fixed w-4 h-4 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference"
			style={{
				left: position.x - 8,
				top: position.y - 8,
				transform: 'translate(-50%, -50%)'
			}}
		/>
	);
}
