import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "水のサジタリオ | 射水のスローベジタブル、私を整え家族を育む食卓。",
  description:
    "古代射水郡の歴史と、弓の清水に伝わる水を呼ぶ一矢を源流に、射水の水と土、自然栽培の思想を食卓へ届けるスローベジタブルブランド。",
  openGraph: {
    title: "水のサジタリオ | 射水のスローベジタブル、私を整え家族を育む食卓。",
    description:
      "古代射水郡の歴史と、弓の清水に伝わる水を呼ぶ一矢をブランドの源流として伝える、射水のスローベジタブル。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta content="no-cache, no-store, must-revalidate" httpEquiv="Cache-Control" />
        <meta content="no-cache" httpEquiv="Pragma" />
        <meta content="0" httpEquiv="Expires" />
      </head>
      <body>{children}</body>
    </html>
  );
}
