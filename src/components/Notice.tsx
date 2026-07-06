import { type ReactNode } from "react";
import { Compass } from "./Compass";

/**
 * A soft, friendly "coming soon" style notice used where real details (pricing,
 * booking, contact) are not final yet.
 */
export function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-full bg-caramel/12 px-5 py-3 text-sm font-medium text-caramel-dark ring-1 ring-caramel/25">
      <Compass className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </div>
  );
}
