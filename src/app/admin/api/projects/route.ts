import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
	try {
		const projects = await prisma.project.findMany({
			orderBy: [{ display_order: "asc" }, { name: "asc" }],
		});

		const total = projects.length;

		const parsedProjects = projects.map((project) => ({
			...project,
			tech_stack: JSON.parse(project.tech_stack || "[]"),
			source: JSON.parse(project.source || "[]"),
		}));

		const response = NextResponse.json(parsedProjects);

		response.headers.set("X-Total-Count", total.toString());
		return response;
	} catch {
		return NextResponse.json(
			{ error: "FAILED_TO_FETCH_PROJECTS" },
			{ status: 500 },
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();

		const project = await prisma.project.create({
			data: {
				...data,
				tech_stack: JSON.stringify(data.tech_stack || []),
				source: JSON.stringify(data.source || []),
			},
		});

		return NextResponse.json({
			data: {
				...project,
				tech_stack: JSON.parse(project.tech_stack || "[]"),
				source: JSON.parse(project.source || "[]"),
			},
		});
	} catch {
		return NextResponse.json(
			{ error: "FAILED_TO_CREATE_PROJECT" },
			{ status: 500 },
		);
	}
}
