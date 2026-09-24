import type { APIRoute } from 'astro';
import { monetizationConfig } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const publisherId = monetizationConfig.adsense.publisherId;
  const body = publisherId
    ? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
    : '# ยังไม่มี AdSense publisher ID — เติม PUBLIC_ADSENSE_PUBLISHER_ID ใน .env ก่อนยื่นสมัคร\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
