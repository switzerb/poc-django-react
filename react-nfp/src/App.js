import React, {Component} from 'react';


class App extends Component {
  
  
  renderRankings() {
    return (<div className="App">
      <p>Rankings Listing Page</p>
    </div>);
  }
  
  renderOther() {
    return (
      <div>
        <p>Contact Manager Page or Something Else</p>
      </div>
    )
  }
  
  render() {
    return this.props.page === 'rankings' ? this.renderRankings() : this.renderOther()
  }
}

export default App;
