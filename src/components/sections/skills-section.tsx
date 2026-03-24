import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { skills } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const frontendSkills = skills.filter((skill) => skill.category === 'frontend');
const backendSkills = skills.filter((skill) => skill.category === 'backend');
const toolingSkills = skills.filter((skill) => skill.category === 'tooling');

function SkillProgressList({
  list,
}: {
  list: Array<{ name: string; level: number; colorClass: string }>;
}) {
  return (
    <div className='space-y-4'>
      {list.map((skill) => (
        <article key={skill.name} className='pixel-border rounded-lg bg-card p-4' data-reveal>
          <div className='mb-2 flex items-center justify-between text-sm'>
            <span>{skill.name}</span>
            <span className='font-pixel text-[10px]'>{skill.level}%</span>
          </div>
          <div className='h-3 rounded-sm bg-muted'>
            <div
              className={`h-3 rounded-sm ${skill.colorClass} transition-all duration-500`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </article>
      ))}
    </div>
  );
}

export function SkillsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id='skills' className='container py-14' ref={sectionRef}>
      <h2 className='mb-6 font-display text-3xl text-foreground' data-reveal>
        Навыки
      </h2>

      <Tabs defaultValue='frontend'>
        <TabsList className='pixel-border'>
          <TabsTrigger value='frontend'>React Frontend Trends</TabsTrigger>
          <TabsTrigger value='backend'>Node.js / REST</TabsTrigger>
          <TabsTrigger value='tooling'>Testing & Tooling</TabsTrigger>
        </TabsList>

        <TabsContent value='frontend'>
          <SkillProgressList list={frontendSkills} />
        </TabsContent>

        <TabsContent value='backend'>
          <SkillProgressList list={backendSkills} />
        </TabsContent>

        <TabsContent value='tooling'>
          <SkillProgressList list={toolingSkills} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
