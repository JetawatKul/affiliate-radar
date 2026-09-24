# หัวข้อบทความ 20 เรื่อง (ร่างโดย Claude)

แม็ปกับ keyword ร่างใน `keyword-research.md` และสร้างเป็นไฟล์ draft ไว้แล้วใน `src/content/guides/` (มี `draft: true` จะยังไม่ขึ้นหน้า production จนกว่า Jay จะเขียนเนื้อหาจริงและลบ `draft: true` ออก)

แต่ละไฟล์มีแค่โครงหัวข้อ (H2) เป็นแนวทาง ไม่มีเนื้อหาจริง เพราะประสบการณ์ ภาพ และตัวเลขต้องมาจาก Jay เท่านั้น

## กลุ่ม 1: เริ่มต้นและสมัคร (start-and-signup)

| # | ไฟล์ | หัวข้อ |
| --- | --- | --- |
| 1 | `01-signup-shopee-affiliate.md` | สมัคร Shopee Affiliate ยังไง เริ่มจากศูนย์ใน 10 นาที |
| 2 | `02-documents-before-signup.md` | เตรียมเอกสารและบัญชีธนาคารก่อนสมัคร Affiliate |
| 3 | `03-understand-dashboard.md` | เข้าใจ Dashboard Affiliate: ดูค่าคอม ดูลิงก์ ดูสถิติตรงไหน |
| 4 | `04-create-first-affiliate-link.md` | สร้างลิงก์ Affiliate ตัวแรกทีละขั้นตอน |
| 5 | `05-affiliate-vs-reseller-vs-dropship.md` | ความแตกต่างระหว่าง Affiliate, Reseller และ Dropship |
| 6 | `06-choose-your-channel.md` | เตรียมช่องทางก่อนเริ่ม: Facebook, TikTok หรือเว็บของตัวเอง |
| 7 | `07-shopee-affiliate-rules-for-beginners.md` | เข้าใจกติกา Shopee Affiliate ฉบับอ่านง่ายสำหรับมือใหม่ |

## กลุ่ม 2: เลือกสินค้าและอ่านค่าคอม (pick-products-and-read-rates)

| # | ไฟล์ | หัวข้อ |
| --- | --- | --- |
| 8 | `08-read-commission-rate-table.md` | อ่านตารางค่าคอมมิชชันแต่ละหมวดสินค้ายังไง |
| 9 | `09-pick-products-for-your-audience.md` | เลือกสินค้าที่เหมาะกับผู้ชมของคุณ ไม่ใช่สินค้าที่ค่าคอมสูงที่สุด |
| 10 | `10-store-commission-vs-campaign-commission.md` | ความแตกต่างค่าคอมจากร้านค้ากับค่าคอมจากแคมเปญ |
| 11 | `11-why-approved-commission-is-lower.md` | ทำไมค่าคอมที่อนุมัติถึงน้อยกว่าที่คำนวณไว้ |
| 12 | `12-use-the-commission-calculator.md` | ใช้เครื่องคำนวณค่าคอมประเมินรายได้ก่อนโปรโมตสินค้า |
| 13 | `13-verify-product-before-review.md` | เช็กยังไงว่าสินค้าที่จะรีวิวยังขายอยู่จริงก่อนเผยแพร่ |
| 14 | `14-health-beauty-products-without-overclaiming.md` | เทคนิครีวิวสินค้าสุขภาพและความงามแบบไม่เคลมเกินจริง |

## กลุ่ม 3: ทำคอนเทนต์แรกให้ถูกกติกา (first-content-by-the-rules)

| # | ไฟล์ | หัวข้อ |
| --- | --- | --- |
| 15 | `15-write-your-first-review.md` | เขียนรีวิวสินค้าชิ้นแรกให้เป็นธรรมชาติ ไม่เหมือนโฆษณา |
| 16 | `16-affiliate-disclosure-wording.md` | ใส่ข้อความเปิดเผยลิงก์ Affiliate ให้ถูกต้องตามกฎ |
| 17 | `17-phone-photo-and-video-tips.md` | ถ่ายภาพหรือวิดีโอรีวิวด้วยมือถือให้ดูน่าเชื่อถือ |
| 18 | `18-common-mistakes-that-break-the-rules.md` | ข้อห้ามที่พลาดบ่อย: popup, ลิงก์ข้ามแพลตฟอร์ม, คีย์เวิร์ดแบรนด์ |
| 19 | `19-where-to-place-affiliate-links.md` | วางลิงก์ Affiliate ตรงไหนในบทความถึงจะเป็นธรรมชาติและได้คลิก |
| 20 | `20-pre-publish-checklist.md` | เช็กลิสต์ก่อนกดเผยแพร่บทความ Affiliate ชิ้นแรก |

## วิธีใช้งานสำหรับ Jay

1. เปิดไฟล์ที่ต้องการเขียนใน `src/content/guides/`
2. เขียนเนื้อหาจริงแทนโครงหัวข้อ ใส่ภาพหน้าจอ/ประสบการณ์จริง
3. ลบ `draft: true` ออกจาก frontmatter เมื่อพร้อมเผยแพร่ (หรือเปลี่ยนเป็น `draft: false`)
4. ปรับ `pubDate` ให้เป็นวันที่เผยแพร่จริง
5. เปิด PR ตามขั้นตอนใน AGENTS.md
