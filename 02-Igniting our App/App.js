import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { class: 'h1' }, 'This is h1'),
    React.createElement('h2', { class: 'h2' }, 'This is h2'),
  ])
)

// const heading = React.createElement(
//   'h1',
//   { id: 'heading', class: 'heading' },
//   'hello world form React!'
// )
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)
