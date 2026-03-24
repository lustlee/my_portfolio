import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const INTRO = "Frontend Developer • Anime & Games Vibes";

export function HeroSection() {
	const [typedText, setTypedText] = useState("");
	const rootRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
			timeline
				.fromTo(
					".hero-chip",
					{ y: 20, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.6 },
				)
				.fromTo(
					".hero-title",
					{ y: 28, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.8 },
					"-=0.2",
				)
				.fromTo(
					".hero-sub",
					{ y: 20, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7 },
					"-=0.4",
				)
				.fromTo(
					".hero-actions",
					{ y: 16, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.6 },
					"-=0.35",
				)
				.fromTo(
					".hero-avatar",
					{ x: 24, opacity: 0, scale: 0.94 },
					{ x: 0, opacity: 1, scale: 1, duration: 0.7 },
					"-=0.5",
				);
		}, rootRef);

		let index = 0;
		const typingTimer = window.setInterval(() => {
			index += 1;
			setTypedText(INTRO.slice(0, index));

			if (index >= INTRO.length) {
				window.clearInterval(typingTimer);
			}
		}, 48);

		return () => {
			ctx.revert();
			window.clearInterval(typingTimer);
		};
	}, []);

	return (
		<section id='hero' ref={rootRef} className='container py-20 md:py-28'>
			<div className='mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_auto]'>
				<div className='space-y-7'>
					<div className='hero-chip inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-anime text-xs text-cat-blue'>
						<span className='inline-block h-2 w-2 animate-pulse rounded-full bg-cat-green' />
						Open to cool frontend projects
					</div>

					<h1 className='hero-title font-display text-5xl leading-tight tracking-tight text-foreground md:text-7xl'>
						Crafting playful interfaces with pixel soul.
					</h1>

					<p className='hero-sub min-h-8 font-pixel text-[10px] leading-5 text-cat-mauve md:text-xs'>
						{typedText}
						<span className='ml-1 inline-block animate-blink'>|</span>
					</p>

					<div className='hero-actions flex flex-wrap gap-3'>
						<Link
							to='/projects'
							className='pixel-border rounded-md bg-primary px-5 py-2 text-sm text-primary-foreground'
						>
							Смотреть проекты
						</Link>
						<Link
							to='/contacts'
							className='pixel-border rounded-md bg-secondary px-5 py-2 text-sm text-secondary-foreground'
						>
							Связаться
						</Link>
					</div>
				</div>

				<div className='hero-avatar pixel-border mx-auto w-full max-w-[280px] rounded-xl bg-card p-4 md:mx-0'>
					<div className='relative aspect-square overflow-hidden rounded-lg border border-border bg-gradient-to-b from-cat-mauve/30 via-cat-blue/20 to-ayu-cyan/20'>
						<div className='absolute left-4 top-4 h-2 w-2 bg-cat-blue/90' />
						<div className='absolute right-5 top-8 h-2 w-2 bg-cat-mauve/90' />
						<div className='absolute bottom-7 left-6 h-2 w-2 bg-ayu-yellow/90' />
						<div className='absolute bottom-6 right-8 h-2 w-2 bg-ayu-cyan/90' />
						<div className='absolute left-1/2 top-4 h-16 w-20 -translate-x-1/2 rounded-none border-2 border-border/70 bg-cat-crust/80' />
						<div className='absolute left-1/2 top-9 h-20 w-24 -translate-x-1/2 rounded-none border-2 border-border bg-cat-peach/85' />
						<div className='absolute left-[calc(50%-20px)] top-[60px] h-2 w-2 bg-cat-crust' />
						<div className='absolute left-[calc(50%+12px)] top-[60px] h-2 w-2 bg-cat-crust' />
						<div className='absolute left-1/2 top-[72px] h-2 w-6 -translate-x-1/2 bg-cat-crust' />
						<div className='absolute left-1/2 top-[7.1rem] h-16 w-28 -translate-x-1/2 rounded-none border-2 border-border/70 bg-cat-base/85' />
						<div className='absolute left-[calc(50%-44px)] top-[8.3rem] h-3 w-5 bg-ayu-orange/80' />
						<div className='absolute right-[calc(50%-44px)] top-[8.3rem] h-3 w-5 bg-ayu-orange/80' />
						<div className='absolute left-1/2 top-[9.5rem] h-6 w-16 -translate-x-1/2 rounded-none border border-border/70 bg-ayu-orange/75' />
					</div>
					<p className='mt-3 text-center font-console text-[11px] text-muted-foreground'>
						Player: Ramazan | Chibi Frontend Mage
					</p>
				</div>
			</div>
		</section>
	);
}
