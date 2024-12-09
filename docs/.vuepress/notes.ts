import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const graphics = defineNoteConfig({
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
      ]
    },
    {
      text: '课后作业',
      items: [
        'Assignment-0.md'
      ]
    },
  ]
})

const mysql = defineNoteConfig({
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
      ]
    },
  ]
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [graphics, mysql],
})