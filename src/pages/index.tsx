import { Inter } from "next/font/google";
import { HomPage } from "@/components";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const t = useTranslations("common");

  return (
    <main className={inter.className}>
      <HomPage />
    </main>
  );
}
