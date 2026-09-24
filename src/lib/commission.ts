// สูตรคำนวณค่าคอมมิชชันโดยประมาณ — คำนวณฝั่ง client เท่านั้น ไม่เก็บข้อมูลผู้ใช้
// คืนค่า null เมื่อข้อมูลไม่ครบหรือไม่ถูกต้อง เพื่อให้ UI แสดง "ไม่ทราบ" แทน 0

export interface CommissionInput {
  price?: number | null;
  ratePercent?: number | null;
  orders?: number | null;
}

export function calculateCommission({ price, ratePercent, orders }: CommissionInput): number | null {
  if (price == null || ratePercent == null || orders == null) return null;
  if (!Number.isFinite(price) || !Number.isFinite(ratePercent) || !Number.isFinite(orders)) return null;
  if (price < 0 || ratePercent < 0 || orders < 0) return null;

  return price * (ratePercent / 100) * orders;
}
