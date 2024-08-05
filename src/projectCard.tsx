import { borderClass, GlassCard } from './glassCard';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <GlassCard>
      <div className="flex flex-col gap-4">
        <div className="font-bold">
          <a href={props.githubUrl}>{props.title}</a>
        </div>
        <hr className={borderClass}></hr>
        <div>{props.description}</div>
      </div>
    </GlassCard>
  );
};
