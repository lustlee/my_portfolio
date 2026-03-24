import { useEffect } from "react";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";

import { AppLayout } from "@/components/layout/app-layout";
import { AboutPage } from "@/pages/about-page";
import { ContactsPage } from "@/pages/contacts-page";
import { HomePage } from "@/pages/home-page";
import { ProjectsPage } from "@/pages/projects-page";
import { useThemeStore } from "@/store/theme-store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "projects", element: <ProjectsPage /> },
			{ path: "contacts", element: <ContactsPage /> },
			{ path: "*", element: <Navigate to='/' replace /> },
		],
	},
]);

function App() {
	const theme = useThemeStore((state) => state.theme);
	const setTheme = useThemeStore((state) => state.setTheme);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);

	useEffect(() => {
		const savedTheme = localStorage.getItem("portfolio-theme");
		if (!savedTheme) {
			const preferredDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			setTheme(preferredDark ? "dark" : "light");
		}
	}, [setTheme]);

	return <RouterProvider router={router} />;
}

export default App;
