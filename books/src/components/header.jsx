import React from 'react';
import './../scss/app.scss';

const Header = (props) => {
    return (
        <div className="header">
            <div className="search-container">
                <input type="text" className="search-box" onChange={props.searchText} />
                {
                    props.stateValue.isSearchLoad &&
                    <span className="search-load-icon">
                        <i className="fa fa-spinner fa-spin"></i>
                    </span>
                }
                <span className="search-icon" onClick={props.searchBooks}>
                    <i className="fa fa-search"></i>
                </span>

                {/* 
                    show auto complete data from search results
                */}
                {
                    props.stateValue.showAutoComplete &&
                    <div className="search-complete">
                        {
                            props.stateValue._books && props.stateValue._books.map(book => {
                                let volumeInfo = book.volumeInfo;
                                return (
                                    <li key={volumeInfo.title} onClick={() => props.getBookById(book.id)}>{volumeInfo.title}</li>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
};

export default Header;