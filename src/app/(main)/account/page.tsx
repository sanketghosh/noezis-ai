import { Card, CardHeader } from "@/components/ui/card";
import { getSessionData } from "@/utils/get-session";
import SignOutButton from "./_components/sign-out-button";
import { ThemeToggleGroup } from "./_components/theme-toggle-group";
import { Separator } from "@/components/ui/separator";

export default async function Account() {
  const sessionUserData = await getSessionData();

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
      <h1 className="text-2xl font-semibold">Account</h1>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="bg-muted flex size-14 items-center justify-center rounded-md text-3xl font-semibold">
            {sessionUserData?.name.charAt(0)}
          </div>
          <div>
            <h1 className="font-semibold">{sessionUserData?.name}</h1>
            <p className="text-muted-foreground font-medium">
              {sessionUserData?.email}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SignOutButton className="w-fit" />
          <ThemeToggleGroup />
        </div>
      </div>
      <Separator />
    </div>
  );
}
