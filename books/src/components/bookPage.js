/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { appContext } from './contexts/context';
import Book from './book';

class BookPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.context.state);
    }

    render() {
        return (
            <appContext.Consumer>
                {
                    allState => {
                        const bookById = allState.state.bookById;
                        return (
                            <div>
                                <Book bookProp={bookById} />
                            </div>
                        )
                    }
                }
            </appContext.Consumer>
        );
    }
}

BookPage.contextType = appContext;
export default BookPage;