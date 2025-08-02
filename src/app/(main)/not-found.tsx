// packages
import { cn } from "@/lib/utils";
import Link from "next/link";

// components
import { buttonVariants } from "@/components/ui/button";

export default function NotfoundPage() {
  return (
    <div className="relative">
      <img
        src="/alien.jpeg"
        alt=""
        className="z-0 h-screen w-screen object-cover brightness-75"
      />
      <div className="absolute left-1/2 top-3/4 z-10 max-w-full -translate-x-1/2 -translate-y-1/2 p-4">
        <div className="space-y-4 rounded-lg bg-black/40 px-3 py-6 text-center">
          <h1 className="text-xl font-extrabold md:text-2xl xl:text-3xl">
            Page Not Found
          </h1>
          <p className="mx-auto max-w-lg leading-tight lg:text-lg">
            Something went wrong. Might be some internal issue or check the URL
            you provided.
          </p>
          <Link
            href={"/"}
            className={cn(
              buttonVariants({
                variant: "default",
              }),
            )}
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
