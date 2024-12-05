import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/avatar-round.png',
  // logo: false
  // your git repo url
  // docsRepo: '',
  // docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: 'https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/avatar-round.png',
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
