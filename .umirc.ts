import { defineConfig } from 'dumi';
const repo = 'mybooksite';
export default defineConfig({
  title: 'Site Name',
  mode: 'site',
  // more config: https://d.umijs.org/config
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  exportStatic: {},
});
