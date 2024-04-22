import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    {
      name: "epicwindcss",
      hooks: {
        "astro:config:setup": ({ addWatchFile, config }) => {
          //console.log(new URL("../src/components/sidebar.js", config.root));
          //addWatchFile(new URL("../src/components/sidebar.js", config.root));
        },
      },
    },
  ],
});
