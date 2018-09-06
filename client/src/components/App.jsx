import React from 'react';
import axios from 'Axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  /*
  * retrieve top 20 trending GIFs upon component mount
  */
  componentDidMount() {
    this.fetchGIFs('trending')
  }

  /**
   * when user enters search query and hits enter, reset offset to 0 
   * and fetch associated GIFs
   */
  handleKeyDown(e){
    let value = e.target.value.split(' ').join('+');

    if(e.keyCode == 13){
      e.preventDefault();
      this.setState({
        route: value,
        offset: 0
      });
      this.fetchGIFs(value)
    }
  }

  render () {
    return (
      <main className="main">
        <header>
          <h1 className="brand-logo center" onClick={() => window.location.reload()}>Park Planner</h1>
          <nav>
            <Search handleKeyDown={this.handleKeyDown}/>
          </nav>
        </header>
        <section >
        </section>
      </main>
    )
  }
}

export default App;