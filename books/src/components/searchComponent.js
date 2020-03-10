import React from 'react';


const SearchComponent = (props) => (
    <div className="m-2">
        <div className="results-container">
            <span>
                Search text: <label>{props.stateValue.searchText}</label>
            </span>
            &nbsp;
            <span>
                Result Count: (<label>{props.stateValue.data && props.stateValue.data.totalItems ? props.stateValue.data.totalItems : 0}</label>)
            </span>
        </div>
    </div>
);

export default SearchComponent;