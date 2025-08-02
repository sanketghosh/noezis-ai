"use client";

// packages
import { useTransition } from "react";
import { Loader2Icon, LogOutIcon } from "lucide-react";

// local modules
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

// components
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SignOutButtonProps = {} & React.ComponentPropsWithRef<"button">;

export default function SignOutButton({ className }: SignOutButtonProps) {
  const [isPending, setTransition] = useTransition();
  const router = useRouter();
  const { toast } = useToast();

  const signOutHandler = async () => {
    setTransition(async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast({
              title: "Success!",
              description: "User has been signed out successfully.",
            });
            setInterval(() => {}, 1000);
            router.push("/sign-up");
          },
          onError: (ctx) => {
            toast({
              variant: "destructive",
              title: "Error!",
              description: ctx.error.message,
            });
          },
        },
      });
    });
  };

  return (
    <Button
      variant={"destructive"}
      disabled={isPending}
      onClick={signOutHandler}
      size={"default"}
      className={cn("w-full", className)}
    >
      {isPending ? (
        <>
          <Loader2Icon className="animate-spin" size={20} />
          Signing Out
        </>
      ) : (
        <>
          <LogOutIcon size={20} />
          Sign Out
        </>
      )}
    </Button>
  );
}
