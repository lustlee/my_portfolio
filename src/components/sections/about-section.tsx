import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function AboutSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id='about' className='container py-14 font-anime' ref={sectionRef}>
      <h2 className='mb-6 text-3xl text-foreground' data-reveal>
        Обо мне
      </h2>

      <div className='grid gap-5 md:grid-cols-2'>
        <article className='pixel-border rounded-xl bg-card/80 p-6 md:p-8' data-reveal>
          <h3 className='mb-3 text-xl text-foreground'>Работа</h3>
          <p className='text-muted-foreground'>
            Я специалист в своей области: проектирую и разрабатываю современные frontend-продукты
            на React и TypeScript, умею выстраивать архитектуру, ускорять интерфейсы и доводить
            UX до продакшн-качества. Также уверенно работаю с Node.js, Express.js и REST API.
          </p>
        </article>

        <article className='pixel-border rounded-xl bg-card/80 p-6 md:p-8' data-reveal>
          <h3 className='mb-3 text-xl text-foreground'>Хобби</h3>
          <p className='text-muted-foreground'>
            Вне рабочих задач люблю игры, аниме и визуальные эксперименты. Эти увлечения помогают
            мне находить свежие идеи для интерфейсов: атмосферу, ритм анимаций и детали, которые
            делают цифровой продукт живым и узнаваемым.
          </p>
        </article>
      </div>
    </section>
  );
}
