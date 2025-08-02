import { LightbulbIcon } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { ToggleGroupItem } from "../ui/toggle-group";

type GeneralHoverCardProps = {
  children: React.ReactNode;
  cardContent: React.ReactElement;
};

export default function GeneralHoverCard({
  cardContent,
  children,
}: GeneralHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent side="bottom">{cardContent}</HoverCardContent>
    </HoverCard>
  );
}
