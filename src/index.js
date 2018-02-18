import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import ENV from '../config/env'

import SearchBar from './components/search_bar'

const API_KEY = ENV['API_KEY']

YTSearch({key: API_KEY , term: 'スノボ'}, function(data){ console.log(data) 
})

//Create new Component. This component should
//produce some html.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

//Take this component's generated HTML and put
//it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
