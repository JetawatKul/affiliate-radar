// ตรวจลิงก์ภายในทุกลิงก์หลัง build ว่าชี้ไปหน้าที่มีอยู่จริง (S4 AC: ไม่มีลิงก์เสีย)
// รันหลัง `astro build` เท่านั้น เพราะอ่านจากโฟลเดอร์ dist/
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

const DIST_DIR = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

if (!existsSync(DIST_DIR)) {
  console.error('ไม่พบโฟลเดอร์ dist/ — รัน `npm run build` ก่อนรันสคริปต์นี้');
  process.exit(1);
}

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(fullPath));
    else if (entry.name.endsWith('.html')) files.push(fullPath);
  }
  return files;
}

function resolveTarget(link) {
  const clean = link.split('#')[0].split('?')[0];
  if (clean === '' || clean === '/') return join(DIST_DIR, 'index.html');
  const withoutLeadingSlash = clean.replace(/^\//, '');
  if (extname(withoutLeadingSlash)) return join(DIST_DIR, withoutLeadingSlash);
  return join(DIST_DIR, withoutLeadingSlash, 'index.html');
}

function fileExists(path) {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
}

const htmlFiles = walk(DIST_DIR);
const hrefPattern = /href="([^"]+)"/g;
const broken = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const pageUrl = file.slice(DIST_DIR.length).replace(/\\/g, '/');
  for (const match of html.matchAll(hrefPattern)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue; // ข้ามลิงก์ภายนอกและ protocol-relative
    const target = resolveTarget(href);
    if (!fileExists(target)) {
      broken.push({ page: pageUrl, href });
    }
  }
}

if (broken.length > 0) {
  console.error(`พบลิงก์ภายในที่เสีย ${broken.length} จุด:`);
  for (const { page, href } of broken) {
    console.error(`  - ${page} -> ${href}`);
  }
  process.exit(1);
}

console.log(`ตรวจลิงก์ภายในผ่านทั้งหมด (${htmlFiles.length} หน้า)`);
