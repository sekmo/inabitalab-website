import { defineConfig } from 'astro/config';
import { sanityIntegration as sanity } from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // adapter: vercel(),
  integrations: [sanity({
    projectId: '45a8gqkh',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: false,
  }), react()]
});