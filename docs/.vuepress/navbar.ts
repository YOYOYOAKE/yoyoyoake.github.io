import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  {
    text: '首页',
    link: '/',
    icon: 'material-symbols:home-rounded'
  },
  {
    text: '博客',
    link: '/blog/',
    icon: 'material-symbols:article-rounded'
  },
  {
    text: '周记',
    link: '/record/README.md',
    icon: 'material-symbols:ink-pen-rounded'
  },
  {
    text: '友链',
    link: '/friends/',
    icon: 'material-symbols:linked-services'
  },
  {
    text: '知识库',
    items: [
      { text: '计算机图形学', link: '/graphics/README.md' },
      { text: 'MySQL', link: '/mysql/README.md' },
    ],
    icon: 'material-symbols:book-4-spark-rounded'
  },
])