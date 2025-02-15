import { Inter } from "next/font/google";
import { HomePage } from "@/components";
import { useTranslations } from "next-intl";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const t = useTranslations("common");

  return (
    <>
      <Head>
        <title>I'm Anderson!</title>
        <meta name="description" content="My portfolio" />
      </Head>
      <main className={inter.className}>
        <HomePage />
      </main>
    </>
  );
}
