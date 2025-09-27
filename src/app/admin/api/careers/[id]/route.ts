import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
	_: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		await prisma.career.delete({
			where: { id: parseInt(params.id) },
		});

		return NextResponse.json({ data: { id: parseInt(params.id) } });
	} catch {
		return NextResponse.json(
			{ error: "FAILED_TO_DELETE_CAREER" },
			{ status: 500 },
		);
	}
}

