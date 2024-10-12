import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Logo from "@/public/icons/logo.svg"
import Youtube from "@/public/icons/youtube.svg"
import Tiktok from "@/public/icons/tiktok.svg"
import Vk from "@/public/icons/vk.svg"
import Telegram from "@/public/icons/telegram.svg"
import Image from "next/image"
import Link from "next/link";
import PagesLinks from "@/components/PagesLinks";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["500", "700", "900"]
})

export const metadata: Metadata = {
  title: "РСКА",
  description: "РСКА — Российское Сотружество Касима-Син-рю и Айкидо",
  openGraph: {
    images: ["/ruka/logo.svg"],
    title: "РСКА",
    description: "РСКА — Российское Сотружество Касима-Син-рю и Айкидо"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <aside
        className={styles.sidebar}
        id="sidebar"
        >
          <Image src={Logo} alt="logo" />
          <PagesLinks />
          <div className={styles.networks}>
            <Link href="https://youtube.com">
              <Image src={Youtube} alt="youtube" />
            </Link>
            <Link href="https://tiktok.com">
              <Image src={Tiktok} alt="tiktok" />
            </Link>
            <Link href="https://vk.com">
              <Image src={Vk} alt="vk" />
            </Link>
            <Link href="https://telegram.com">
              <Image src={Telegram} alt="telegram" />
            </Link>
          </div>
        </aside>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
