"use client"

import { Copyright } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
	const year = new Date().getFullYear()
	
	const [frame, setFrame] = useState(0)
	
	const generateWave = (offset: number) => {
		const width = 30
		const height = 15
		const grid = Array(height).fill(null).map(() => Array(width).fill(' '))
		
		for (let x = 0; x < width; x++) {
			const angle = (x / width * Math.PI * 4) + offset
			const y = Math.round(height / 2 + Math.sin(angle) * 4)
			
			if (y >= 0 && y < height && grid[y]) {
				grid[y][x] = '~'
			}
		}
		
		for (let x = 0; x < width; x++) {
			const angle = (x / width * Math.PI * 4) + offset + Math.PI / 2
			const y = Math.round(height / 2 + Math.cos(angle) * 3)
			
			if (y >= 0 && y < height && grid[y]) {
				grid[y][x] = grid[y][x] === '~' ? '≈' : '∼'
			}
		}
		
		for (let i = 0; i < 5; i++) {
			const x = Math.round((offset * 2 + i * 6) % width)
			const y = Math.round(height / 2 + Math.sin(offset + i) * 2)
			
			if (x >= 0 && x < width && y >= 0 && y < height && grid[y]) {
				grid[y][x] = '●'
			}
		}
		
		return grid.map(row => row.join('')).join('\n')
	}
	
	useEffect(() => {
		const interval = setInterval(() => {
			setFrame(prev => prev + 0.2)
		}, 80)
		
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="max-md:px-6 max-lg:px-30 lg:px-[150px] mb-20 flex items-center justify-center flex-col gap-10">
			<div id="animation" className="bg-border/30 h-64 w-64 rounded-sm flex items-center justify-center overflow-hidden border-hover-animate">
				<div className="font-mono text-xs text-accent leading-tight whitespace-pre">
					{generateWave(frame)}
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-4">
				<small className="max-lg:text-xs text-muted"><span className="text-accent">~/portfolio</span> $ echo &quot;let&apos;s connect!&quot;</small>
				<div className="flex items-center text-sm gap-8 text-muted">
					<a href="https://github.com/yamazhen" className="footer-link" target="_blank" rel="noopener noreferrer">github</a>
					<a href="https://linkedin.com/in/yamazhen" className="footer-link" target="_blank" rel="noopener noreferrer">linkedin</a>
					<a href="mailto:bowxyt@gmail.com" className="footer-link">email</a>
				</div>
				<small className="flex items-center text-muted/60 gap-2"><Copyright strokeWidth={1.5} size={8} /> {year} • built with caffeine and love</small>
			</div>
		</div>
	)
}
