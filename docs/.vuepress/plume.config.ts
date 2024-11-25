import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://avatars.githubusercontent.com/u/88564661?v=4',
  // your git repo url
  // docsRepo: '',
  // docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: 'https://avatars.githubusercontent.com/u/88564661?v=4',
    name: 'YOAKE',
    description: 'Per Aspera Ad Astra.',
    circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  
  social: [
    { icon: 'github', link: 'https://github.com/yoyoyoake/' },
  ],

})
