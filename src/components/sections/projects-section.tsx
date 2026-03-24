import { ProjectCard } from '@/components/projects/project-card';
import { projects } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function ProjectsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id='projects' className='container py-14' ref={sectionRef}>
      <h2 className='mb-6 font-display text-3xl text-foreground' data-reveal>
        Проекты
      </h2>

      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
