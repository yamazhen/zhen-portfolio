import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
	_: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const project = await prisma.project.findUnique({
			where: { id: parseInt(params.id) },
		});

		if (!project) {
			return NextResponse.json(
				{ error: "PROJECT_NOT_FOUND" },
				{ status: 404 },
			);
		}

		return NextResponse.json({
			data: {
				...project,
				tech_stack: JSON.parse(project.tech_stack || "[]"),
				source: JSON.parse(project.source || "[]"),
			},
		});
	} catch {
		return NextResponse.json(
			{ error: "FAILED_TO_FETCH_PROJECT" },
			{ status: 500 },
		);
	}
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const data = await request.json();

		const project = await prisma.project.update({
			where: { id: parseInt(params.id) },
			data: {
				...data,
				tech_stack: data.tech_stack
					? JSON.stringify(data.tech_stack)
					: undefined,
				source: data.source ? JSON.stringify(data.source) : undefined,
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
			{ error: "FAILED_TO_UPDATE_PROJECT" },
			{ status: 500 },
		);
	}
}

export async function DELETE(
	_: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		await prisma.project.delete({
			where: { id: parseInt(params.id) },
		});

		return NextResponse.json({ data: { id: parseInt(params.id) } });
	} catch {
		return NextResponse.json(
			{ error: "FAILED_TO_DELETE_PROJECT" },
			{ status: 500 },
		);
	}
}
