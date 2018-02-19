import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
// API_KEYを読み込む
import ENV from '../config/env'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = ENV['API_KEY']

//Create new Component. This component should
//produce some html.
class App extends Component {

  constructor(props){
    super(props)
    // クラスベースのコンポーネントのみ、どこでもthis.stateが利用できる
    this.state = {videos: []}

    YTSearch({key: API_KEY , term: 'one ok rock'}, (videos) => {
      this.setState({videos}) //{videos: videos}の時略せる
    })
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

//Take this component's generated HTML and put
//it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))

