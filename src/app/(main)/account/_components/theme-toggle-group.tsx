"use client";

import { Moon, Sun, Laptop2 } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ThemeToggleGroup() {
  const { setTheme, theme } = useTheme();

  return (
    <ToggleGroup
      type="single"
      size="sm"
      value={theme}
      onValueChange={(val) => {
        if (val) setTheme(val);
      }}
      className="rounded-lg border p-1"
    >
      <ToggleGroupItem
        className="cursor-pointer"
        value="light"
        aria-label="Toggle light mode"
      >
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="cursor-pointer"
        value="dark"
        aria-label="Toggle dark mode"
      >
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="cursor-pointer"
        value="system"
        aria-label="Toggle system mode"
      >
        <Laptop2 className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
