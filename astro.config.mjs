// @ts-check
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx'
import {onRequest} from "./src/middleware.js";

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    middleware: [onRequest]
});
