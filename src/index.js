import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
// Load YOUTUBE API KEY 
import ENV from '../config/env'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = ENV['API_KEY']

//Create new Component. This component should
//produce some html.
class App extends Component {

  constructor(props){
    super(props)
    // クラスベースのコンポーネントのみ、どこでもthis.stateが利用できる
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('snowboard')
  }
  
  videoSearch(term){
    YTSearch({key: API_KEY , term: term}, (videos) => {
    //this.setState({videos}) //{videos: videos}の時略せる
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render(){
    return (
      <div>
        <SearchBar onSearchTermChange={(term) => {this.videoSearch(term)}}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}

//Take this component's generated HTML and put
//it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))

