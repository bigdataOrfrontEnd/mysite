import { defineConfig } from 'dumi';
const repo = 'mysite';
export default defineConfig({
  title: 'Site Name',
  mode: 'site',
  // more config: https://d.umijs.org/config,这个也修改了呀
  base: '/mysite/',
  publicPath: '/mysite/',
  exportStatic: {},
});
