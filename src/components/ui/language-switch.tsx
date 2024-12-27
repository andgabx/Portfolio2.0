import * as React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LanguageSwitch() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center space-x-2 text-white p-4 rounded-lg">
              <Label className="text-sm text-muted-foreground">PT-BR</Label>
              <Switch className="data-[state=checked]:bg-primary-light data-[state=unchecked]:bg-primary-dark border-primary-dark/60" />
              <Label className="text-sm font-medium">ENG</Label>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-primary-dark text-md p-4 rounded-lg text-white">
            <p>Still in development {":)"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
