import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '周记', link: '/record/README.md' },
  {
    text: '知识库',
    items: [
      { text: '计算机图形学', link: '/graphics/README.md' },
      { text: 'MySQL', link: '/mysql/README.md' },
    ]
  },
])