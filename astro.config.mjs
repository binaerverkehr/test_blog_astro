import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://testblogastro.netlify.app/",
  integrations: [preact()]
});