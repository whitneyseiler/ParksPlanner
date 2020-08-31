import React from 'react';
import {Row, Input, Button} from 'react-materialize'

let Key = () => {
  return (
    <div id="map-key">
      <h4 id="key-title">KEY</h4>
      <ul classname="key-list">
        <li className="key-item">
          <div id="grey-state" className="key-color"></div><h4 className="key-item-name">UNEXPLORED</h4>
        </li>
        <li className="key-item">
          <div id="green-state" className="key-color"></div><h4 className="key-item-name">VISITED</h4>
        </li>
      </ul>
    </div>
  )
}

export default Key;