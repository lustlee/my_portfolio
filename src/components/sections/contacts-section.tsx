import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function ContactsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id='contacts' className='container py-14 pb-24' ref={sectionRef}>
      <div className='pixel-border rounded-xl bg-card p-6 md:p-8' data-reveal>
        <h2 className='mb-3 font-display text-3xl text-foreground' data-reveal>
          Контакты
        </h2>
        <p className='mb-6 font-anime text-muted-foreground' data-reveal>
          Готов обсудить frontend, дизайн-системы и креативные веб-проекты.
        </p>

        <div className='flex flex-wrap gap-3' data-reveal>
          <a className='rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground' href='mailto:hello@rama.dev'>
            hello@rama.dev
          </a>
          <a className='rounded-md bg-secondary px-4 py-2 text-sm text-secondary-foreground' href='https://github.com/' target='_blank' rel='noreferrer'>
            GitHub
          </a>
          <a className='rounded-md bg-secondary px-4 py-2 text-sm text-secondary-foreground' href='https://t.me/' target='_blank' rel='noreferrer'>
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
