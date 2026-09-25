# S5 launch checklist (สัปดาห์ 6): sitemap, AdSense, เปิดเว็บจริง

สถานะ: ร่างโดย Claude — งานส่วนใหญ่ใน S5 เป็นขั้นตอนที่ต้องใช้บัญชี/ตัวตนจริงของ Jay
ทำแทนไม่ได้ (การสมัคร AdSense, ยืนยัน Search Console, การจ่ายเงินซื้อโดเมน/อัปเกรด Vercel)
โค้ดฝั่งเว็บพร้อมรอต่อโดเมนจริงแล้วตั้งแต่ S1

## ทำไมยังดีพลอยจริงไม่ได้ตอนนี้

Vercel Fair Use Guidelines ห้ามใช้แพลน Hobby (ฟรี) กับเว็บที่มีจุดประสงค์หลักเป็นเชิงพาณิชย์
ซึ่งรวมเว็บที่มีโฆษณา AdSense และลิงก์ Affiliate เป็นรายได้หลัก — เว็บนี้เข้าเงื่อนไขนั้นตั้งแต่ต้น
แม้ตอนนี้ยังปิด flag โฆษณา/ลิงก์อยู่ก็ตาม เพราะ "จุดประสงค์ของโปรเจกต์" ไม่ใช่แค่ตอนเปิดใช้งานจริง
ดังนั้นก่อน deploy ครั้งแรกควรอัปเกรดเป็น Vercel Pro ก่อน (ราคาประมาณ 700 บาท/เดือน ตามที่ประเมินไว้ในตารางต้นทุน)

## ขั้นตอนที่ Jay ต้องทำเอง (เรียงตามลำดับ)

1. **เลือกชื่อแบรนด์และจดโดเมนจริง** (ยังไม่ตัดสินใจ ณ ตอนนี้) — ห้ามมีคำว่า Shopee
2. **อัปเกรดบัญชี Vercel team `jay-kul-s-projects` เป็น Pro** ก่อน deploy โปรเจกต์นี้ (เป็นการจ่ายเงินจริง ผมทำแทนไม่ได้)
3. บอกผมว่าจดโดเมนอะไรและอัปเกรด Pro แล้ว → ผมจะสร้าง Vercel project เชื่อมกับ repo `JetawatKul/affiliate-radar`, ตั้งค่า custom domain, แก้ `SITE_URL` ใน `astro.config.mjs` และ `public/robots.txt` ให้เป็นโดเมนจริง แล้วเปิด PR ให้ตรวจ
4. เข้า [Google Search Console](https://search.google.com/search-console) ด้วยบัญชี Google ของ Jay เอง เพิ่มโดเมนนี้เป็น property แล้วยืนยันความเป็นเจ้าของ (DNS TXT record หรือไฟล์ยืนยัน) — ต้องเป็นบัญชี Jay เท่านั้น
5. ส่ง sitemap `https://<โดเมนจริง>/sitemap-index.xml` ใน Search Console
6. เข้า [Google AdSense](https://www.google.com/adsense/start/) สมัครด้วยข้อมูลจริงของ Jay (อายุ 18+, ที่อยู่รับเงินจริง) แล้วใส่โดเมนเว็บ — ขั้นตอนนี้มีการกรอกข้อมูลส่วนตัวและการเงิน ผมจะไม่กรอกให้เด็ดขาด
7. หลัง AdSense อนุมัติ ส่ง publisher ID ให้ผม (หรือใส่เองใน `.env` เป็น `PUBLIC_ADSENSE_PUBLISHER_ID`) แล้วผมจะเปิด `monetizationConfig.adsEnabled = true` ผ่าน PR ให้ตรวจก่อน merge

## สิ่งที่ผมเตรียมพร้อมไว้แล้วฝั่งโค้ด (ไม่ต้องทำอะไรเพิ่ม)

- `src/pages/ads.txt.ts` อ่าน publisher ID จาก config อัตโนมัติ พร้อมใช้ทันทีที่มี ID จริง
- sitemap สร้างอัตโนมัติจาก `@astrojs/sitemap` ทุกครั้งที่ build (`sitemap-index.xml`)
- ทุกหน้ามี title/description/canonical ไม่ซ้ำกันแล้ว (ตรวจผ่าน `npm run lint` และ `npm run check-links`)
- AdSense script และ ad slot ถูก gate ไว้หลัง production build + ผู้ใช้กดยอมรับคุกกี้แล้วเท่านั้น (`src/components/CookieConsent.astro`, `src/components/AdSlot.astro`)

## เนื้อหา

บทความครบ 20 เรื่องเป็น hard requirement ของ S5 เช่นกัน — มีโครงหัวข้อรอ Jay เขียนแล้วทั้งหมดใน
`src/content/guides/` (ดู `article-topics.md` สำหรับรายการ) ต้องเขียนเสร็จและลบ `draft: true` ออกก่อนยื่น AdSense จริง
