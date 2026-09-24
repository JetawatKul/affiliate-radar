import { describe, expect, it } from 'vitest';
import { calculateCommission } from './commission';

describe('calculateCommission', () => {
  it('คำนวณค่าคอมปกติได้ถูกต้อง', () => {
    expect(calculateCommission({ price: 500, ratePercent: 5, orders: 10 })).toBe(250);
  });

  it('ราคา 0 ให้ค่าคอมเป็น 0', () => {
    expect(calculateCommission({ price: 0, ratePercent: 5, orders: 10 })).toBe(0);
  });

  it('อัตราค่าคอม 0% ให้ผลเป็น 0', () => {
    expect(calculateCommission({ price: 500, ratePercent: 0, orders: 10 })).toBe(0);
  });

  it('จำนวนออเดอร์ 0 ให้ผลเป็น 0', () => {
    expect(calculateCommission({ price: 500, ratePercent: 5, orders: 0 })).toBe(0);
  });

  it('ไม่กรอกราคา คืนค่า null (แสดง "ไม่ทราบ")', () => {
    expect(calculateCommission({ price: null, ratePercent: 5, orders: 10 })).toBeNull();
  });

  it('ไม่กรอกอัตราค่าคอม คืนค่า null', () => {
    expect(calculateCommission({ price: 500, ratePercent: undefined, orders: 10 })).toBeNull();
  });

  it('ไม่กรอกจำนวนออเดอร์ คืนค่า null', () => {
    expect(calculateCommission({ price: 500, ratePercent: 5, orders: null })).toBeNull();
  });

  it('ราคาติดลบ คืนค่า null', () => {
    expect(calculateCommission({ price: -100, ratePercent: 5, orders: 10 })).toBeNull();
  });

  it('อัตราค่าคอมติดลบ คืนค่า null', () => {
    expect(calculateCommission({ price: 500, ratePercent: -5, orders: 10 })).toBeNull();
  });

  it('ทศนิยมคำนวณได้ถูกต้อง', () => {
    expect(calculateCommission({ price: 199.5, ratePercent: 3.5, orders: 4 })).toBeCloseTo(27.93, 2);
  });
});
