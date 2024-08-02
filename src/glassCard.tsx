import { PropsWithChildren } from 'react';

interface GlassCardProps {}

export function GlassCard(props: PropsWithChildren<GlassCardProps>) {
  const colorClass = 'bg-white dark:bg-gray-800';
  const borderClass = 'border border-gray-200 dark:border-white border-opacity-30 dark:border-opacity-15';
  const bgClass = 'backdrop-blur-lg saturate-200 bg-opacity-75 bg-neutral-200 dark:bg-neutral-800';
  return <div className={`${colorClass} ${borderClass} ${bgClass} m-2 rounded-lg shadow-lg p-4`}>{props.children}</div>;
}
