import { ImageResponse } from 'next/og';
import { getSiteSettings } from '@/lib/data';

export const dynamic = 'force-dynamic';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default async function Icon() {
  const settings = await getSiteSettings();
  const name = settings.siteName || 'AffiliateShop.lk';
  const initials = name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase() || 'AS';
  const color = settings.primaryColor || '#f97316';

  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: 'white', fontSize: 28, fontWeight: 900, borderRadius: 16 }}>
      <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', background: color, borderRadius: 14 }}>{initials}</div>
    </div>,
    { ...size },
  );
}
