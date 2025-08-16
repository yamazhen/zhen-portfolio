"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		let currentX = 0;
		let currentY = 0;
		let targetX = 0;
		let targetY = 0;
		let animationId: number;

		const lerp = (start: number, end: number, factor: number) => {
			return start + (end - start) * factor;
		};

		const animate = () => {
			currentX = lerp(currentX, targetX, 0.15);
			currentY = lerp(currentY, targetY, 0.15);

			setPosition({ x: currentX, y: currentY });
			animationId = requestAnimationFrame(animate);
		};

		const handleMouseMove = (e: MouseEvent) => {
			targetX = e.clientX;
			targetY = e.clientY;
		};

		window.addEventListener("mousemove", handleMouseMove);
		animate();

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			className="fixed w-6 h-6 bg-transparent border border-accent rounded-full pointer-events-none z-50"
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
