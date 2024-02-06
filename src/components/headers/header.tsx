import { ModeToggle } from "@/app/_components/mode-toggle";

export function Header() {
  return (
    <div className="flex justify-end min-w-full h-16 items-center px-8 bg-background">
      <ModeToggle />
    </div>
  );
}
