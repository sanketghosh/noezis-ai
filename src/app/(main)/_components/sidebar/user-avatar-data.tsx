import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getSessionData } from "@/utils/get-session";

export default async function UserAvatarData() {
  const session = await getSessionData();

  return (
    <div>
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={session?.image!} alt={session?.name} />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{session?.name}</span>
        <span className="truncate text-xs">{session?.email}</span>
      </div>
    </div>
  );
}
