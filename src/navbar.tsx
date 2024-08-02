import { ThemeToggle } from './themeToggle';

export const NavBar = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="p-2 w-full h-full flex-row flex items-center gap-4">
        <img src="/logo.png" className="h-10 rounded-lg bg-black"></img>
        <div className="flex flex-row grow gap-2"></div>
        <ThemeToggle />
      </div>
      <hr className="border-neutral-200 dark:border-neutral-800 border-2 w-full"></hr>
    </div>
  );
};
