import React from 'react';
import Map from './Map.jsx';
import Search from './Search.jsx';
import { listenEvents } from 'react-mapbox-gl/lib/map-events';

let App = () => {
  return (
    <main className="main">
      <header className="header">
        <h1 className="brand-logo center" onClick={() => window.location.reload()}>Parks Planner</h1>
        <h4>“I haven’t been everywhere, but it’s on my list.” - Susan Sontag</h4>
        <nav>
          <Search />
        </nav>
      </header>
      <Map/>
    </main>
  )
}

export default App;
