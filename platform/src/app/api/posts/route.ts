import { NextRequest, NextResponse } from "next/server";
import { createPost, getPostsByBoard } from "@/modules/discussion/service";

export async function GET(request: NextRequest) {
  const boardId = request.nextUrl.searchParams.get("boardId");
  if (!boardId) {
    return NextResponse.json({ error: "boardId is required" }, { status: 400 });
  }

  const posts = await getPostsByBoard(boardId);
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const { title, body, authorId, boardId, parentId } = await request.json();

  if (!title || !body || !authorId || !boardId) {
    return NextResponse.json({ error: "title, body, authorId, boardId are required" }, { status: 400 });
  }

  const post = await createPost({ title, body, authorId, boardId, parentId });
  return NextResponse.json(post, { status: 201 });
}
