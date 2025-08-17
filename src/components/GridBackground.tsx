"use client";

import { ReactNode, useEffect, useRef } from "react";

interface GridBgProps {
	children?: ReactNode;
	className?: string;
}

export default function GridBackground({ children, className = "" }: GridBgProps) {
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let currentX = -999;
		let currentY = -999;
		let targetX = -999;
		let targetY = -999;
		let animationId: number;
		const delay = 0.05

		const lerp = (start: number, end: number, factor: number) => {
			return start + (end - start) * factor;
		};

		const animate = () => {
			currentX = lerp(currentX, targetX, delay);
			currentY = lerp(currentY, targetY, delay);

			if (gridRef.current) {
				gridRef.current.style.setProperty("--mouse-x", `${currentX}px`);
				gridRef.current.style.setProperty("--mouse-y", `${currentY}px`);
			}

			animationId = requestAnimationFrame(animate);
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!gridRef.current) return;

			const rect = gridRef.current.getBoundingClientRect();
			targetX = e.clientX - rect.left;
			targetY = e.clientY - rect.top;
		};

		const handleTouchMove = (e: TouchEvent) => {
			if (!gridRef.current) return;
	
			const rect = gridRef.current.getBoundingClientRect()
			const touch = e.touches[0]
			if (touch) {
				targetX = touch.clientX - rect.left;
				targetY = touch.clientY - rect.top;
			}
		}

		const handleTouchStart = (e: TouchEvent) => {
			if (!gridRef.current) return;

			const rect = gridRef.current.getBoundingClientRect()
			const touch = e.touches[0]
			if (touch) {
				targetX = touch.clientX - rect.left
				targetY = touch.clientY - rect.top
			}
		}

		const handleTouchEnd = (e: TouchEvent) => {
			if (!gridRef.current) return;

			const rect = gridRef.current.getBoundingClientRect()
			const touch = e.changedTouches[0]
			if (touch) {
				targetX = touch.clientX - rect.left
				targetY = touch.clientY - rect.top
			}
		}

		const handleMouseLeave = () => {
			targetX = currentX;
			targetY = currentY;
		};

		const element = gridRef.current;
		element?.addEventListener("mousemove", handleMouseMove);
		element?.addEventListener("mouseleave", handleMouseLeave);
		element?.addEventListener("touchmove", handleTouchMove, { passive: true });
		element?.addEventListener("touchstart", handleTouchStart, { passive: true });
		element?.addEventListener("touchend", handleTouchEnd, { passive: true });

		animate();

		return () => {
			cancelAnimationFrame(animationId);
			element?.removeEventListener("mousemove", handleMouseMove);
			element?.removeEventListener("mouseleave", handleMouseLeave);
			element?.removeEventListener("touchmove", handleTouchMove);
			element?.removeEventListener("touchstart", handleTouchStart);
			element?.removeEventListener("touchend", handleTouchEnd);
		};
	}, []);

	return (
		<div ref={gridRef} className={`background-grid ${className}`}>
			{children}
		</div>
	)

}
