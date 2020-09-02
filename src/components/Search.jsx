import React from 'react';
import {Row, Input, Button} from 'react-materialize'

let Search = ({clearSearch}) => {
    return (
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input id="feature-filter" type="search" autoComplete="off" />
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons" onClick={() => clearSearch()}>close</i>
					</div>
				</form>
			</div>
    )
}

export default Search;