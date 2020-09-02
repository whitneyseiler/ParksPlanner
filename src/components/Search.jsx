import React from 'react';
import {Row, Input, Button} from 'react-materialize'

let Search = ({handleKeyDown}) => {
    return (
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input id="feature-filter" type="search" />
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
    )
}

export default Search;