// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: "docs",
			logo: {
				src: "./src/assets/logo.png",
				alt: "git-acm logo",
			},
			favicon: "./src/assets/favicon.ico",
			social: [
				{
					icon: "github",
					label: "github",
					href: "https://github.com/shivamhwp/git-acm",
				},
				{
					icon: "x.com",
					label: "x.com",
					href: "https://twitter.com/shivamhwp",
				},
			],
			sidebar: [
				{
					label: "guides",
					items: [
						{ label: "installation", slug: "guides/installation" },
						{ label: "configuration", slug: "guides/configuration" },
					],
				},
				{
					label: "reference",
					autogenerate: { directory: "reference" },
				},
				{
					label: "faq",
					autogenerate: { directory: "faq" },
				},
			],
			customCss: ["./src/tailwind.css"],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
