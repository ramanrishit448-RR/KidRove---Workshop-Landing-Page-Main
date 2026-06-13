import fs from 'fs';
import path from 'path';

/** Writable backup directory — /tmp on Vercel, local data/ otherwise */
export function getBackupDir(): string {
  const dir = process.env.VERCEL
    ? path.join('/tmp', 'kidslab-workshop')
    : path.join(__dirname, '../../data');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return dir;
}

export function getBackupFilePath(): string {
  return path.join(getBackupDir(), 'registrations.json');
}
