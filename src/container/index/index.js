import { createElement, createHeader } from "../../script/layout";


const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)


const POST_LIST = [
  {
    caterory: [
      { text: 'Важливо', id: 1 },
      { text: 'Нове', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
  },
  {
    caterory: [
      { text: 'Важливо', id: 1 },
      { text: 'Нове', id: 2 },
    ],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '15.01',
    viewed: true,
  },
]

const createPost = () => {
  const postList = createElement('div', 'post-list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post-header')

    // ================

    const cateroryList = createElement(
      'div',
      'post-category-list',
    )

    postData.caterory.forEach((caterory) => {
      const categorySpan = createElement(
        'span',
        `post-category post-category--${caterory.id}`,
        caterory.text,
      )
      cateroryList.append(categorySpan)
    })
    // ================

    const dateSpan = createElement(
      'span',
      'post-date',
      postData.date,
    )

    postHeader.append(cateroryList, dateSpan)

    // ================

    const infoParagraph = createElement(
      'p',
      'post-info',
      postData.info,
    )

    post.append(postHeader,infoParagraph)

    // ================

    postList.append(post)
  })
  return postList
}

// ================

const post = createPost()
page.append(post)
