import React from 'react';

import Book from './book';

const RelatedComponent = (props) => {

    return (
        <div className="m-2">
            <h3>Related Books</h3>
            {/* 
            preferred book when click on the search results from auto completed data
          */}
            <div className="row m-0">
                {
                    !props.stateValue.showAutoComplete && props.stateValue._books && props.stateValue._books.map(book => {
                        return (
                            <div className="col-md-6 mb-2" key={book.id}>
                                <Book bookProp={book} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default RelatedComponent;