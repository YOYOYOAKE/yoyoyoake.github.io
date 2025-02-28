import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'record',
  link: '/record/',
  sidebar: [
    'README.md',
    {
      text: 'Archive One：初试',
      items: [
        '2025W1.md',
        '2025W2.md',
        '2025W3.md',
        '2025W4-6.md',
        '2025W7.md',
        '2025W8.md'
      ]
    },
    {
      text: 'Archive Two：求索',
      items: [
        '2025W9.md',
      ]
    }
  ]
})