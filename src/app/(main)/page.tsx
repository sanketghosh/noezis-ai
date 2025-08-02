// components
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/(main)/_components/sidebar/app-sidebar";
import PromptBox from "@/app/(main)/_components/prompt-box/prompt-box";

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            {/* <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>
        </header>
        <div className="flex min-h-[calc(100vh-56px)] items-center justify-center">
          <div className="mx-auto flex w-full max-w-2xl flex-col space-y-6 px-4 md:space-y-8">
            <h2 className="text-center text-6xl font-normal lowercase select-none md:text-7xl">
              noezis
            </h2>
            <PromptBox />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
