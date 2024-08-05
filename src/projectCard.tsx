import { borderClass, GlassCard } from './glassCard';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl?: string;
  image?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <GlassCard>
      <div className="flex w-full h-full gap-4">
        {props.image ? <img src={props.image} className="aspect-square h-32 rounded-lg"></img> : null}
        <div className="flex flex-col gap-4">
          <div className="font-bold">
            <a href={props.githubUrl}>{props.title}</a>
          </div>
          <hr className={borderClass}></hr>
          <div>{props.description}</div>
        </div>
      </div>
    </GlassCard>
  );
};
