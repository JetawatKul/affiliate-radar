// Config กลางของเว็บ — เปิด/ปิดระบบหารายได้และค่าที่ใช้ซ้ำได้จากที่เดียว
// ห้ามใส่ secret หรือ API key จริงในไฟล์นี้ ใช้ environment variable แทน

export const siteConfig = {
  name: 'Affiliate Radar', // เปลี่ยนเป็นชื่อแบรนด์จริงเมื่อ Jay ตัดสินใจ (S0) — ห้ามมีคำว่า Shopee
  description: 'คู่มือเริ่มต้นทำ Affiliate สำหรับมือใหม่ เขียนจากประสบการณ์จริง',
  locale: 'th-TH',
  defaultOgImage: '/og-default.png',
};

export const monetizationConfig = {
  // ปิดไว้ก่อนจนกว่าจะได้รับอนุมัติจากเครือข่ายโฆษณา (S5 เป็นต้นไป)
  adsEnabled: false,
  // เปิดเมื่อมีลิงก์ Affiliate จริงพร้อมใช้งาน (S3 เป็นต้นไป)
  affiliateEnabled: false,
  adsense: {
    // เติม publisher ID จริงผ่าน PUBLIC_ADSENSE_PUBLISHER_ID ใน .env เท่านั้น
    publisherId: import.meta.env.PUBLIC_ADSENSE_PUBLISHER_ID ?? '',
  },
  analytics: {
    // เติม GA4 measurement ID จริงผ่าน PUBLIC_GA4_MEASUREMENT_ID ใน .env เท่านั้น
    ga4MeasurementId: import.meta.env.PUBLIC_GA4_MEASUREMENT_ID ?? '',
  },
} as const;

// สคริปต์โฆษณาและ analytics โหลดเฉพาะบน production build เท่านั้น ไม่โหลดบน preview deploy
export const isProductionBuild = import.meta.env.PROD;

export const guideGroups = {
  'start-and-signup': 'เริ่มต้นและสมัคร',
  'pick-products-and-read-rates': 'เลือกสินค้าและอ่านค่าคอม',
  'first-content-by-the-rules': 'ทำคอนเทนต์แรกให้ถูกกติกา',
} as const;

export type GuideGroupKey = keyof typeof guideGroups;
