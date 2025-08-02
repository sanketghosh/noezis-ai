"use client";

import * as React from "react";
import { BrainIcon, HomeIcon, PenBoxIcon, SearchIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarChats } from "./sidebar-chats";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

// This is sample data.

const sidebarOptions = [
  {
    title: "Home",
    url: "#",
    icon: HomeIcon,
    isActive: true,
  },
  {
    title: "New Chat",
    url: "#",
    icon: PenBoxIcon,
    badge: "10",
  },
  {
    title: "Search",
    url: "#",
    icon: SearchIcon,
  },
];

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  favorites: [
    {
      id: Math.random(),
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
    {
      id: Math.random(),
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
      emoji: "🍳",
    },
    {
      id: Math.random(),
      name: "Fitness Tracker & Workout Routines",
      url: "#",
      emoji: "💪",
    },
    {
      id: Math.random(),
      name: "Book Notes & Reading List",
      url: "#",
      emoji: "📚",
    },
    {
      id: Math.random(),
      name: "Sustainable Gardening Tips & Plant Care",
      url: "#",
      emoji: "🌱",
    },
    {
      id: Math.random(),
      name: "Language Learning Progress & Resources",
      url: "#",
      emoji: "🗣️",
    },
    {
      id: Math.random(),
      name: "Home Renovation Ideas & Budget Tracker",
      url: "#",
      emoji: "🏠",
    },
    {
      id: Math.random(),
      name: "Personal Finance & Investment Portfolio",
      url: "#",
      emoji: "💰",
    },
    {
      id: Math.random(),
      name: "Movie & TV Show Watchlist with Reviews",
      url: "#",
      emoji: "🎬",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
    {
      id: Math.random(),
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="border-r-0"
      {...props}
      // collapsible="none"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:bg-muted/40 hover:text-primary"
            >
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                  <BrainIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-3xl font-semibold">
                    noezis
                  </span>
                  {/* <span className="truncate text-xs">Enterprise</span> */}
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavMain items={sidebarOptions} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarChats favorites={data.favorites} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
