import React from 'react';
import {Row, Input, Button} from 'react-materialize'

let Key = () => {
    return (
			<div id="map-key">
        <h4>KEY</h4>
        <div className="key-item">
          <div id="grey-state" className="key-color"></div><h4 className="key-item-name">UNEXPLORED</h4>
        </div>
        <div className="key-item">
          <div id="green-state" className="key-color"></div><h4 className="key-item-name">VISITED</h4>
        </div>
			</div>
    )
}

export default Key;