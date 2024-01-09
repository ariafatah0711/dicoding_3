/* style */
import './style/style.css'

/* components */
// body
import './script/components/loader.js'
import './script/components/result-list.js'
import './script/components/body/header-navbar.js'
import './script/components/body/search-form.js'
import './script/components/body/search-history.js'
import './script/components/body/footer-section.js'

// list
import './script/components/list/home-list.js'
import './script/components/list/anime-list.js'
import './script/components/list/manga-list.js'
import './script/components/list/characters-list.js'
import './script/components/list/top-anime-list.js'
import './script/components/list/top-manga-list.js'
import './script/components/list/top-characters-list.js'
import main from './script/view/main.js'

/* icon */
const urlIcon =
  'https://png.pngtree.com/png-clipart/20220121/ourmid/pngtree-original-cat-s-ear-icon-png-image_4275650.png'
document.head.innerHTML += `<link rel="icon" type="image/x-icon" href="${urlIcon}">`

/* setup */
main()
