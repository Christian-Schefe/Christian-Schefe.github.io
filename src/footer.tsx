import { GlassCard } from './glassCard';

export const Footer = () => {
  return (
    <GlassCard className="w-full p-4" padding="">
      <div className="flex gap-4 w-full items-center justify-center p-4">
        <p className="font-bold">Contact</p>
        <div className="rounded-full dark:bg-neutral-700 bg-gray-200 py-2 px-4 flex items-center gap-2 hover:outline outline-2">
          <img src="/email.svg" className="w-5 h-5 dark:invert"></img>
          <p>meeshroom@gmx.net</p>
        </div>
      </div>
    </GlassCard>
  );
};
