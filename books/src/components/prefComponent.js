import React from 'react';
import Book from './book';

const PrefComponent = (props) => {
    const bookById = props.bookById;
    return (
        <div className="m-2">
            <h3>Preferred Book</h3>
            {/* 
            preferred book when click on the search results from auto completed data
          */}
            <div className="row m-0">
                {
                    bookById && bookById.volumeInfo &&
                    <div className="col-md-6 mb-3">
                        <Book bookProp={bookById} />
                    </div>
                }
            </div>
        </div>
    )
};

export default PrefComponent;