import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "signups.json");

export interface Signup {
  email: string;
  role: string;
  timestamp: string;
}

async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify([]));
  }
}

export async function getSignups(): Promise<Signup[]> {
  await ensureDataFile();
  const data = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

export async function addSignup(email: string, role: string): Promise<boolean> {
  const signups = await getSignups();

  if (signups.some((s) => s.email === email)) {
    return false;
  }

  signups.push({ email, role, timestamp: new Date().toISOString() });
  await fs.writeFile(DATA_FILE, JSON.stringify(signups, null, 2));
  return true;
}

export async function getCount(): Promise<number> {
  const signups = await getSignups();
  return signups.length;
}
