import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
	try {
		const careers = await prisma.career.findMany({
			orderBy: [{ start_date: "desc" }],
		});

		const total = careers.length;

		const parsedCareer = careers.map((career) => ({
			...career,
			descriptions: career.descriptions
				? JSON.parse(career.descriptions)
				: [],
			extra: career.extra ? JSON.parse(career.extra) : [],
		}));

		const response = NextResponse.json(parsedCareer);

		response.headers.set("X-Total-Count", total.toString());
		return response;
	} catch {
		return NextResponse.json(
			{ error: "FAILED_TO_FETCH_CAREERS" },
			{ status: 500 },
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();

		const career = await prisma.career.create({
			data: {
				...data,
				descriptions: data.descriptions
					? JSON.stringify(data.descriptions)
					: null,
				extra: data.extra ? JSON.stringify(data.extra) : null,
				start_date: new Date(data.start_date),
				end_date: data.end_date ? new Date(data.end_date) : null,
			},
		});

		return NextResponse.json({
			...career,
			descriptions: career.descriptions
				? JSON.parse(career.descriptions)
				: [],
			extra: career.extra ? JSON.parse(career.extra) : [],
		});
	} catch {
		return NextResponse.json(
			{ error: "FAILED_TO_CREATE_CAREER" },
			{ status: 500 },
		);
	}
}
