// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "git-acm docs",
      social: {
        github: "https://github.com/shivamhwp/git-acm",
        "x.com": "https://twitter.com/shivamhwp",
      },
      sidebar: [
        {
          label: "guides",
          items: [
            { label: "introduction", slug: "guides/introduction" },
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
