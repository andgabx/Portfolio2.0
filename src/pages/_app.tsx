import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "next-intl";

// Import das traduções
import en from "../../locales/en.json";
import pt from "../../locales/pt.json";

const messages = {
  en,
  pt,
};

export default function App({ Component, pageProps }: AppProps) {
  const { locale = "en" } = useRouter();

  return (
    <IntlProvider
      messages={messages[locale as keyof typeof messages]}
      locale={locale}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}
