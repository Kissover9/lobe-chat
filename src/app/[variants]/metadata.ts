import type { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  const title = 'ONE1 AI';
  const desc = 'ONE1 AI — 你的个人 AI 助手';
  const url = 'https://www.one1.my';

  return {
    title: { default: title, template: `%s · ${title}` },
    description: desc,
    applicationName: title,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description: desc,
      url,
      siteName: title,
      images: ['/og.png'],         // 确保 /public/og.png 存在
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: ['/og.png'],
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',    // ← 修正
      apple: '/apple-touch-icon.png',
      other: [
        { rel: 'icon', url: '/icons/icon-192x192.png', sizes: '192x192' },
        { rel: 'icon', url: '/icons/icon-512x512.png', sizes: '512x512' },
      ],
    },
    // 可选：canonical/manifest
    // alternates: { canonical: url },
    // manifest: '/manifest.webmanifest',
  };
};
