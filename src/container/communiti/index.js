
import {
  createElement,
  createHeader,
} from '../../script/layout';

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

// =================================================

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)


// ==================================================

const NAV_LIST = [
  {
    category: [
      { text: 'База знань', viewed: true },
      { text: 'Інформація', viewed: false },
    ],

  },
]
 
NAV_LIST.forEach((mainData) => {
    const createNav = () => {
      const navList = createElement('nav', 'nav')

      mainData.category.forEach((category) => {
        const nav = createElement(
          'div',
          category.viewed
            ? 'nav-button button'
            : 'nav-button button viewed',
          category.text,
        )
        navList.append(nav)
      })
      return navList
    }

  const nav = createNav()
  page.append(nav)  

})

// ===================================================

const img = createElement('img')

img.src = 'img/communiti1.png'


page.append(img)

// ===================================================

const communiti = createElement('div', 'communiti')
 
const communitiHeader = createElement(
  'h2',
  'communiti-header',
  'Що таке база знань?',
)
 const communitiInfo = createElement(
   'p',
   'communiti-info',
   'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
 )
communiti.append(communitiHeader, communitiInfo)

page.append(communiti)


// ===================================================

const imageButton = createElement('div', 'img button')

const image = createElement('img')

image.src = 'img/communiti2.png'

imageButton.append(image)

page.append(imageButton)