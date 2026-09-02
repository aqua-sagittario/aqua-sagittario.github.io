import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "水のサジタリオ | 射水のスローベジタブル、私を整え家族を育む食卓。",
  description:
    "射水の水と土の記憶、星の巡り、自然栽培の思想から生まれるスローベジタブルブランド。私を整え、家族を育む、引き算の食卓を届けます。",
  openGraph: {
    title: "水のサジタリオ | 射水のスローベジタブル、私を整え家族を育む食卓。",
    description:
      "射水の水と土の記憶、星の巡り、自然栽培の思想から生まれるスローベジタブル。私を整え、家族を育む、引き算の食卓を伝えるブランドサイト。",
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
