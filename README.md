# Affiliate Radar

เว็บคอนเทนต์เฟส 1 สำหรับมือใหม่ทำ Affiliate — ดูแผนงานเต็มที่ [Affiliate Radar — แผนงานเฟส 1 (PM + Codex)](../Affiliate%20Radar%20—%20แผนงานเฟส%201%20(PM%20+%20Codex).md)
กติกาการทำงานของ Codex/AI อยู่ใน [AGENTS.md](./AGENTS.md)

## คำสั่งหลัก

| คำสั่ง | ทำอะไร |
| --- | --- |
| `npm install` | ติดตั้ง dependency |
| `npm run dev` | รัน dev server ที่ `localhost:4321` |
| `npm run build` | build เป็น production ที่ `./dist/` |
| `npm run test` | รัน unit test ด้วย vitest |
| `npm run lint` | ตรวจ type/template ด้วย `astro check` |

ก่อนเปิด PR ต้องรัน `npm run build`, `npm run test`, `npm run lint` ให้ผ่านทั้งหมด

## โครงสร้างที่เกี่ยวข้อง

- `src/config/site.ts` — config กลาง เปิด/ปิดโฆษณาและลิงก์ Affiliate ด้วย flag เดียว
- `src/content/guides/` — บทความ (Markdown), schema อยู่ที่ `src/content.config.ts`
- `src/components/AffiliateLink.astro` — ลิงก์ Affiliate ทุกลิงก์ต้องผ่าน component นี้
- `src/components/AdSlot.astro` — ช่องโฆษณาที่จองพื้นที่ไว้ก่อนโฆษณาโหลด
- `src/data/products.json` — ข้อมูลสินค้าคัดมือ (S3)
- `src/lib/commission.ts` — สูตรคำนวณค่าคอมมิชชัน มี unit test คู่กัน

ตั้งค่า `.env` จาก `.env.example` เพื่อเติม GA4 measurement ID และ AdSense publisher ID จริง (ห้าม commit `.env`)
