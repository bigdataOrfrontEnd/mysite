import { defineConfig } from 'dumi';
const repo = 'mysite';
export default defineConfig({
  title: 'Site Name',
  mode: 'site',
  // more config: https://d.umijs.org/config
  base: '/',
  publicPath: '/',
  exportStatic: {},
});
