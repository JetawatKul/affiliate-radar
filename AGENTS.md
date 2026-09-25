# AGENTS.md — Affiliate Radar

## Stack
- Astro + TypeScript, content collections ใน src/content/guides
- UI ภาษาไทย, mobile-first, ฟอนต์ไทยจาก Google Fonts พร้อม fallback
- คำสั่ง: npm run build, npm run test, npm run lint, npm run check-links ต้องผ่านก่อนเปิด PR

## กติกาที่ห้ามละเมิด
- ห้าม scraping หรือดึงข้อมูลจาก Shopee/TikTok/Lazada โดยอัตโนมัติ
- ห้ามใส่ API key หรือ secret ในโค้ดฝั่ง client หรือ commit ลง repo
- ลิงก์ Affiliate ทุกลิงก์ใช้ rel="sponsored nofollow" และมีข้อความเปิดเผยในหน้า
- หน้าที่มีลิงก์ Shopee Affiliate ห้ามมีลิงก์ไปแพลตฟอร์มซื้อขายอื่น
- ห้ามใช้ชื่อหรือโลโก้ Shopee ในชื่อเว็บ โลโก้ หรือ header
- ไม่ใช้ข้อมูลจำลองบนหน้า production; ตัวเลขทุกตัวต้องมีแหล่งและวันที่

## Definition of done
- Lighthouse มือถือ: Performance และ SEO อย่างน้อย 90
- ทุกหน้ามี title, meta description, canonical ไม่ซ้ำกัน
- ไม่มีลิงก์ภายในที่เสีย (`npm run check-links` ผ่าน)
- PR อธิบายสิ่งที่เปลี่ยนและวิธีทดสอบเป็นภาษาไทย

## Development (Astro CLI)

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Full documentation: https://docs.astro.build

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
