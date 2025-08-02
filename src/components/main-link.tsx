import { cn } from "@/lib/utils";
import { FingerprintIcon } from "lucide-react";
import Link from "next/link";

type MainLinkProps = React.ComponentPropsWithRef<"a">;

export default function MainLink({ className }: MainLinkProps) {
  return (
    <Link
      href={"/"}
      className={cn(
        "flex items-center gap-1 text-lg italic md:text-xl xl:text-2xl",
        className,
      )}
    >
      <FingerprintIcon />
      noezis
    </Link>
  );
}
