import React from 'react'
import ReactDOM from 'react-dom/client'

// JSX - HTML-like or XML-like syntax
const heading = <h1>Namaste React using JSX</h1>

//JSX => React.createElement => ReactElement-js Object => HTMLElement(render)

const HeadingComponent = () => {
  return <h1>React Functional Component </h1>
}

// both f1 and f2 is same
const f1 = () => {
  return true
}
const f2 = () => true

//heading1, heading2  are same
const Heading1 = () => {
  return <h1 className="heading">Namaste React function component 1</h1>
}

const Heading2 = () => (
  <div className="container">
    {heading}
    <Heading1 />
    {HeadingComponent()}
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>
    <h1 className="heading">Namaste React function component 2</h1>
  </div>
)

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<Heading2 />)
