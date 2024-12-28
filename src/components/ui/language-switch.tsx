import * as React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/router";

export default function LanguageSwitch() {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "pt" : "en";
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-2 text-white p-4 rounded-lg">
      <Label className="text-sm text-muted-foreground">PT-BR</Label>
      <Switch
        className="data-[state=checked]:bg-primary-light data-[state=unchecked]:bg-primary-dark border-primary-dark/60"
        checked={locale === "en"}
        onCheckedChange={toggleLanguage}
      />
      <Label className="text-sm font-medium">ENG</Label>
    </div>
  );
}
