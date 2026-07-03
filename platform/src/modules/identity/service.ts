/**
 * Identity Module — Service Layer
 *
 * Responsible for:
 * - User registration
 * - Identity verification (gov ID API integration)
 * - Hash generation and storage
 * - Tier assignment (verified / vouched / unverified)
 * - Account recovery
 *
 * See: /docs/identity-verification.md
 *
 * TODO: This is a placeholder. The identity workstream lead will
 * implement verification flows here.
 */

import { db } from "@/lib/db";

export async function createUser(displayName: string, email?: string) {
  return db.user.create({
    data: {
      displayName,
      email,
      tier: "UNVERIFIED",
    },
  });
}

export async function getUserById(id: string) {
  return db.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: string) {
  return db.user.findUnique({ where: { email } });
}

// TODO: Identity workstream — implement these
// export async function verifyIdentity(userId: string, govIdToken: string) {}
// export async function generateIdentityHash(verificationData: unknown) {}
// export async function vouchForUser(voucherId: string, voucheeId: string) {}
// export async function recoverAccount(identityHash: string) {}
