import React from 'react';
import { useHistory } from "react-router-dom";

const Book = (props, context) => {
    const bookById = props.bookProp;
    const history = useHistory();
    return (
        <div className="book-container">
            <img src={bookById.volumeInfo.imageLinks && bookById.volumeInfo.imageLinks.smallThumbnail} />
            <div className="book-details">
                <p className="book-title" onClick={() => history.push('/book/'+bookById.id)}>
                    {bookById.volumeInfo.title}
                </p>
                <p>By:&nbsp;
                          {bookById.volumeInfo.authors ? bookById.volumeInfo.authors.map(author => {
                    return (
                        <span key={author}>
                            {author}
                            {bookById.volumeInfo.authors.length > 1 && <span>,</span>}
                        </span>
                    )
                })
                        : <span>Unknown</span>
                    }
                </p>
                {
                    bookById.volumeInfo.averageRating ?
                        <p>
                            <span className="rating">{bookById.volumeInfo.averageRating}</span>
                            <span className="review">
                                {bookById.volumeInfo.ratingsCount} <span>Ratings & Reviews</span>
                            </span>
                        </p>
                        :
                        <p className="review">No reviews and ratings available</p>
                }
                <p>Published By: {bookById.volumeInfo.publisher ? bookById.volumeInfo.publisher : 'Unknown'}</p>
                <p>Published Date: {bookById.volumeInfo.publishedDate}</p>
            </div>
        </div>
    )
};

export default Book;