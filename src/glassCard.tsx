import { PropsWithChildren } from 'react';

interface GlassCardProps {
  className?: string;
  padding?: string;
}

export const borderClass = 'border border-gray-200 dark:border-white border-opacity-50 dark:border-opacity-15';

export function GlassCard(props: PropsWithChildren<GlassCardProps>) {
  const bgClass = 'backdrop-blur-lg saturate-150 bg-opacity-65 dark:bg-opacity-65 bg-neutral-200 dark:bg-neutral-800';
  return (
    <div className={`${props.className}`}>
      <div className={`w-full h-full ${borderClass} ${bgClass} rounded-lg shadow-lg ${props.padding ?? 'p-4'}`}>{props.children}</div>
    </div>
  );
}
