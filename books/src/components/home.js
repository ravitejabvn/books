/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import './../scss/app.scss';

import { appContext } from './contexts/context';

import Loader from './loader';
import PrefComponent from './prefComponent';
import RelatedComponent from './relatedComponent';
import Header from './header';
import SearchComponent from './searchComponent';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <appContext.Consumer>
                {
                    allState => (
                        <div>
                            <Loader isLoading={allState.state.isLoading} />
                            <Header
                                stateValue={allState.state}
                                searchText={allState.searchText}
                                searchBooks={allState.searchBooks}
                                getBookById={allState.getBookById}
                            />
                            <SearchComponent stateValue={allState.state} />
                            <PrefComponent bookById={allState.state.bookById} />
                            <RelatedComponent stateValue={allState.state} />
                            {
                                allState.state._books && allState.state._books.length > 0 &&
                                <div className="footer">
                                    <input type="button" className="btn btn-primary" value="Load More" onClick={allState.loadMoreBooks} />
                                </div>
                            }
                        </div>
                    )
                }
            </appContext.Consumer>
        );
    }
}

Home.contextType = appContext;
export default Home;