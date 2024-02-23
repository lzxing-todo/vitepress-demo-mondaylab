import { defineConfig } from 'vitepress';
import { newnav } from './relaConf';
import { sidebar } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-demo-mondaylab/',
  title: 'Lzxing Study',
  description: 'Study Share',

  // 配置markdown写作风格
  // markdown: {
  //   toc: {
  //     level: [1, 2, 3, 4]
  //   },
  //   headers: {
  //     level: [1, 2, 3, 4]
  //   },
  //   // https://github.com/valeriangalliat/markdown-it-anchor#usage
  //   anchor: {
  //     // permalink: anchor.permalink.headerLink()
  //   },
  //   lineNumbers: true // 让代码块中实现行号

  //   // config: (md) => {
  //   //   md.use(demoBlockPlugin, {
  //   //     cssPreprocessor: 'less'
  //   //   });
  //   // }
  // },

  themeConfig: {
    logo: '/avatar.JPG',
    // https://vitepress.dev/reference/default-theme-config
    nav: newnav,
    sidebar: sidebar,

    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lzxing-todo' }
    ]
  }
});
