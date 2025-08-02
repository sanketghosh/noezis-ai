"use client";

// packages
import { useState } from "react";
import { PenBoxIcon, SearchIcon } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SearchCommandDialog } from "@/app/(main)/_components/sidebar/search-command-dialog";

const sidebarMenu = [
  {
    title: "New Chat",
    url: "/",
    icon: PenBoxIcon,
  },
];

export function NavMain() {
  const [openSearchDialog, setOpenSearchDialog] = useState<boolean>(false);

  function handleToggleDialog() {
    setOpenSearchDialog(!openSearchDialog);
  }

  return (
    <SidebarMenu>
      {sidebarMenu.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
      <SidebarMenuItem>
        <SidebarMenuButton onClick={handleToggleDialog}>
          <SearchIcon />
          Search
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SearchCommandDialog
        open={openSearchDialog}
        setOpen={setOpenSearchDialog}
      />
    </SidebarMenu>
  );
}
