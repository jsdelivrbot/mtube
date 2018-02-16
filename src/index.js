import React from 'react'
import ReactDOM from 'react-dom'

const API_KEY = ENV['YOU_TUBE_KEY']

//Create new Component. This component should
//produce some html.
const App = () => {
  return  <div>Hi!!</div>
}

//Take this component's generated HTML and put
//it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
