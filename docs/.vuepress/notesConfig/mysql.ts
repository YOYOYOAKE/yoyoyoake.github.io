import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'mysql',
  link: '/mysql/',
  sidebar: [
    'README.md',
    {
      text: '笔记',
      items: [
        'Part-01.md',
        'Part-02.md',
        'Part-03.md',
        'Part-04.md',
        'Part-05.md',
        'Part-06.md',
        'Part-07.md',
      ]
    },
  ]
})