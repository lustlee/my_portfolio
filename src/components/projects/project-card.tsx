import gsap from 'gsap';
import { useRef } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      y: -6,
      scale: 1.01,
      boxShadow: '0 18px 30px rgba(0, 0, 0, 0.25)',
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  return (
    <Card
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='pixel-border group rounded-xl bg-card will-change-transform'
      data-reveal
    >
      <CardHeader>
        <div
          className={`mb-2 h-20 rounded-md bg-gradient-to-r ${project.accentClass} opacity-80 transition-opacity group-hover:opacity-100`}
        />
        <CardTitle className='font-display text-2xl text-foreground'>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className='flex flex-wrap gap-2'>
        {project.tags.map((tag) => (
          <Badge key={tag} variant='outline'>
            {tag}
          </Badge>
        ))}
      </CardContent>

      <CardFooter>
        <a href={project.link} className='font-pixel text-[10px] text-cat-blue'>
          Open case →
        </a>
      </CardFooter>
    </Card>
  );
}
