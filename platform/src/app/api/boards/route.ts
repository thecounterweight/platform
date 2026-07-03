import { NextRequest, NextResponse } from "next/server";
import { createBoard, listBoards } from "@/modules/discussion/service";

export async function GET() {
  const boards = await listBoards();
  return NextResponse.json(boards);
}

export async function POST(request: NextRequest) {
  const { name, description } = await request.json();

  if (!name || !description) {
    return NextResponse.json({ error: "name and description are required" }, { status: 400 });
  }

  const board = await createBoard(name, description);
  return NextResponse.json(board, { status: 201 });
}
