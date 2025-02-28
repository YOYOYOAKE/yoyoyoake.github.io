import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'record',
  link: '/record/',
  sidebar: [
    'README.md',
    {
      text: '周记',
      items: [
        '2025W1.md',
        '2025W2.md',
        '2025W3.md',
        '2025W4-6.md',
        '2025W7.md',
        '2025W8.md',
      ]
    }
  ]
})