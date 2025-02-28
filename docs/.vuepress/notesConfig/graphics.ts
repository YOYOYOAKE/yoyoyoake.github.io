import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'graphics',
  link: '/graphics/',
  sidebar: [
    'README.md',
    {
      text: '课堂笔记',
      items: [
        'Lecture-01.md',
        'Lecture-02.md',
        'Lecture-03.md',
        'Lecture-04.md',
        'Lecture-05.md',
        'Lecture-06.md',
        'Lecture-07.md',
        'Lecture-08.md',
      ]
    },
    {
      text: '课后作业',
      items: [
        'Assignment-0.md',
        'Assignment-1.md',
      ]
    },
  ]
})
