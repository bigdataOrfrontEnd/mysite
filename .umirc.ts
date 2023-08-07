import { defineConfig } from 'dumi';
export default defineConfig({
  title: '前端复习',
  mode: 'site',
  // more config: https://d.umijs.org/config,这个也修改了呀
  base: '/mysite/',
  publicPath: '/mysite/',
  exportStatic: {},
  // 单语言配置方式如下
  // navs: [
  //   null, // null 值代表保留约定式生成的导航，只做增量配置
  //   //   {
  //   //     title: 'GitHub',
  //   //     path: 'https://github.com/umijs/dumi',
  //   //   },
  //   {
  //     title: '选择版本',
  //     path: '/',
  //     // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
  //     children: [
  //       { title: '版本1.0.0', path: '/one' },
  //       { title: '版本1.0.0', path: '/two' },
  //     ],
  //   },
  // ],
  // menus: {
  //   // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
  //   '/前端知识点': [
  //     {
  //       title: '菜单项',
  //       path: '菜单路由（可选）',
  //       children: [
  //         // 菜单子项（可选）
  //         'index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
  //       ],
  //     },
  //   ],
  //   // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
  // },
  themeConfig: {},
});
