"use client";

import GeneralHoverCard from "@/components/shared/general-hover-card";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  ArrowRightIcon,
  CircleDollarSignIcon,
  GlobeIcon,
  GraduationCapIcon,
  LightbulbIcon,
  SearchCheckIcon,
  SparkleIcon,
  UsersIcon,
} from "lucide-react";
// packages
import React, { useRef, useEffect } from "react";

type AutoResizeInputProps = {
  authenticatedUserId: string;
};

export default function AutoResizeInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, []);

  // on submitting form
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // call server action in a transition
    /* startTransition(async () => {
      const { error, success, workspaceId } =
        await startPromptingAction(formData);
      if (success) {
        toast({
          variant: "default",
          title: "SUCCESS!",
          description: success,
        });
        setInterval(() => {}, 1000);
        router.push(`/workspace/${workspaceId}`);
      } else {
        toast({
          variant: "destructive",
          title: "ERROR!",
          description: error,
        });
      }
    }); */
  };

  return (
    <>
      <div className="border-border bg-background relative flex w-full flex-col rounded-md border-2 px-3 py-3">
        <textarea
          ref={textareaRef}
          className="transition-height max-h-40 min-h-20 w-full resize-none rounded-md border-r border-none bg-transparent outline-none"
          placeholder="So, what app you wanna build today ?"
          //   value={prompt}
          rows={1}
        />
        <Separator />
        <div className="flex items-center justify-between pt-3">
          <div>
            <ToggleGroup
              type="single"
              variant={"outline"}
              defaultValue="search"
              className="space-x-1"
            >
              <GeneralHoverCard cardContent={<SearchCard />}>
                <ToggleGroupItem value="search" aria-label="Toggle search">
                  <SearchCheckIcon className="h-4 w-4" />
                </ToggleGroupItem>
              </GeneralHoverCard>
              <GeneralHoverCard cardContent={<ResearchCard />}>
                <ToggleGroupItem value="research" aria-label="Toggle research">
                  <LightbulbIcon className="h-4 w-4" />
                </ToggleGroupItem>
              </GeneralHoverCard>
            </ToggleGroup>
          </div>
          <div className="space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button size={"icon"} variant={"ghost"}>
                  <GlobeIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mr-8">
                <h2 className="mb-4 text-sm font-semibold">Choose Sources</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex size-10 items-center justify-center rounded-md border">
                      <GlobeIcon size={17} />
                    </div>
                    <div className="w-full space-y-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium">Web</h2>
                        <Switch />
                      </div>
                      <p className="text-muted-foreground text-xs">
                        Search across the entire internet.
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="flex size-10 items-center justify-center rounded-md border">
                      <GraduationCapIcon size={17} />
                    </div>
                    <div className="w-full space-y-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium">Academic</h2>
                        <Switch />
                      </div>
                      <p className="text-muted-foreground text-xs">
                        Search academic papers.
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-2">
                    <div className="flex size-10 items-center justify-center rounded-md border">
                      <UsersIcon size={17} />
                    </div>
                    <div className="w-full space-y-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium">Social</h2>
                        <Switch />
                      </div>
                      <p className="text-muted-foreground text-xs">
                        Discussions and opinions.
                      </p>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Button size={"icon"}>
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function ResearchCard() {
  return (
    <div className="space-y-1.5">
      <h2 className="font-medium">Research</h2>
      <p className="text-muted-foreground text-xs">
        Deep research on any topic, in depth report with more sources. Upgrade
        for more.
      </p>
      <Button className="w-full capitalize" size={"sm"}>
        <SparkleIcon />
        Upgrade to pro
      </Button>
    </div>
  );
}

function SearchCard() {
  return (
    <div className="space-y-1.5">
      <h2 className="font-medium">Search</h2>
      <p className="text-muted-foreground text-xs">
        Do normal queries. Upgrade to pro and switch to better models for better
        results.
      </p>
      <Button className="w-full capitalize" size={"sm"}>
        <SparkleIcon />
        Upgrade to pro
      </Button>
    </div>
  );
}
