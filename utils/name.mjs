import path from 'node:path';
import { fileURLToPath } from 'node:url';

const toLocalPath = (input) => {
  if (!input) return '';
  if (typeof input === 'string' && input.startsWith('file:')) {
    return fileURLToPath(input);
  }
  return input;
};

const getRuleName = (filePath) => {
  const local = toLocalPath(filePath);
  const normalized = String(local).replace(/\\/g, '/');
  const parts = normalized.split('/').filter(Boolean);

  const last = parts[parts.length - 1] || '';
  const secondLast = parts[parts.length - 2];

  const nameWithoutExt = path.posix.parse(last).name;

  return secondLast ? `${secondLast}/${nameWithoutExt}` : nameWithoutExt;
};

export default getRuleName;
