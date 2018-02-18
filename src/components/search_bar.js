import React, {Component} from 'react'

class SearchBar extends Component{
  // インスタンスが生成された最初の一回のみ自動的に呼ばれるメソッド
  constructor(props){
    // SearchBarクラスは、Componentクラスを拡張している。
    // Componentクラスで定義されているconstructorを呼び出している
    super(props)
    // 毎回stateを初期化しておく。プロパティの設定をする。
    this.state = {term: ''}
  }

  render() {
    return(
      <div>
        <input value={this.state.term} onChange={event => this.setState({term: event.target.value})} />
      </div>
    )

  }
}

export default SearchBar

