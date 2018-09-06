import React from 'react';
import Search from './Search.jsx';
import Map from './Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

  }

  componentDidMount() {
  }

  handleMouseEnter(e) {
    let infoBox = document.getElementById('info-box');
    let info = e.target.getAttribute('data-info');
    infoBox.style.display = "block";
    infoBox.innerHTML = info;
  }
  
  handleMouseLeave(e) {
    let infoBox = document.getElementById('info-box');
    infoBox.style.display = "none";
  }

  handleMouseMove(e) {
    let infoBox = document.getElementById('info-box');
    let top = e.clientY - (infoBox.clientHeight + 250);
    let left = e.clientX - (infoBox.clientHeight) - 70;

    infoBox.style.top = `${top}px`;
    infoBox.style.left = `${left}px`;
  }
  
  // var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  // if (ios) {
  //   $('a').on('click touchend', function() {
  //     var link = $(this).attr('href');
  //     window.open(link,'_blank');
  //     return false;
  //   });
  // }


  render () {
    return (
      <main className="main">
        <header>
          <h1 className="brand-logo center" onClick={() => window.location.reload()}>Parks Planner<h4>“I haven’t been everywhere, but it’s on my list.” - Susan Sontag</h4></h1>
          <nav>
            <Search handleKeyDown={this.handleKeyDown}/>
          </nav>
        </header>
        <section >
          <Map handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave} handleMouseMove={this.handleMouseMove}/>
        </section>
      </main>
    )
  }
}

export default App;