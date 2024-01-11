import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://thisnextthing.com/",
  integrations: [
    tailwind(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            ["tito-register-interest", "tito-widget", "tito-button"].includes(
              tag,
            ),
        },
      },
    }),
  ],
  redirects: {
    "/2024/book": "https://ti.to/this-next-thing/2024",
  },
});
