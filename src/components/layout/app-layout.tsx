import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";

export function AppLayout() {
	return (
		<div className='min-h-screen bg-background bg-grid bg-[size:24px_24px] text-foreground'>
			<Navbar />
			<PageTransition>
				<main>
					<Outlet />
				</main>
			</PageTransition>
		</div>
	);
}
