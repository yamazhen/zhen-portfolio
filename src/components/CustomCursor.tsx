"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			className="fixed w-6 h-6 bg-transparent border border-accent rounded-full pointer-events-none z-50 hidden lg:block"
			style={{
				left: position.x,
				top: position.y,
				transform: 'translate(-50%, -50%)'
			}}
		>
			<div className="w-1 h-1 bg-accent rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
		</div>
	);
}
