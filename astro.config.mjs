// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// เปลี่ยนเป็นโดเมนจริงเมื่อ Jay จดโดเมนแล้ว (S0)
export const SITE_URL = 'https://example-affiliate-radar.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
