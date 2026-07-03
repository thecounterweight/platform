/**
 * Discussion Module — Service Layer
 *
 * Responsible for:
 * - Boards (create, list)
 * - Posts (create, read, thread)
 * - Voting (one person, one vote — requires verified identity)
 * - Moderation (two-flag system: community flags → mod queue → action)
 *
 * See: /docs/mvp.md (discussion + moderation sections)
 *
 * TODO: This is a placeholder. The discussion workstream lead will
 * implement these features.
 */

import { db } from "@/lib/db";

export async function createBoard(name: string, description: string) {
  return db.board.create({
    data: { name, description },
  });
}

export async function listBoards() {
  return db.board.findMany({ orderBy: { name: "asc" } });
}

export async function createPost(params: {
  title: string;
  body: string;
  authorId: string;
  boardId: string;
  parentId?: string;
}) {
  return db.post.create({ data: params });
}

export async function getPostsByBoard(boardId: string) {
  return db.post.findMany({
    where: { boardId, parentId: null },
    include: { author: { select: { displayName: true, tier: true } } },
    orderBy: { createdAt: "desc" },
  });
}

// TODO: Discussion workstream — implement these
// export async function voteOnPost(postId: string, userId: string, direction: 'up' | 'down') {}
// export async function flagPost(postId: string, userId: string, reason: string) {}
// export async function getModQueue() {}
// export async function moderatePost(postId: string, action: 'remove' | 'dismiss') {}
