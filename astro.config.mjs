import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://syd.my.id",
  image: {
    domain: ['i.ibb.co.com']
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
