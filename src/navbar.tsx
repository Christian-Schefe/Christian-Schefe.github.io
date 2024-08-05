import { GlassCard } from './glassCard';
import { ThemeToggle } from './themeToggle';

export const NavBar = () => {
  return (
    <GlassCard className="w-full p-4" padding="">
      <div className="p-2 w-full h-full flex-row flex items-center gap-4">
        <img src="/logo.png" className="h-10 rounded-lg bg-neutral-800"></img>
        <div className="flex flex-row grow gap-2"></div>
        <ThemeToggle />
      </div>
    </GlassCard>
  );
};
