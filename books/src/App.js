/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/app.scss';

import { getData } from './API';
import Loader from './components/loader';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _books: [],
      data: {},
      searchText: '--',
      isLoading: false,
      showAutoComplete: false,
      bookById: {}
    }
  }

  componentDidMount() {

  }

  searchText = (e) => {
    this.setState({
      searchText: e.target.value
    });
    setTimeout(() => {
      this.searchBooks();
    }, 300);
  }

  searchBooks = () => {
    // maxResults=10&startIndex=0
    this.setState({
      isSearchLoad: true,
      showAutoComplete: true
    })
    getData('https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchText).then(res => {
      const resData = res.data;
      this.setState({
        data: resData,
        _books: resData.items,
        isSearchLoad: false
      })
    })
  }

  getBookById = (bookId) => {
    this.setState({
      isLoading: true
    })
    // https://www.googleapis.com/books/v1/volumes/volumeId
    getData('https://www.googleapis.com/books/v1/volumes/' + bookId).then(res => {
      const resData = res.data;
      this.setState({
        showAutoComplete: false,
        bookById: resData,
        isLoading: false
      })
    })
  }

  render() {
    const bookById = this.state.bookById;
    return (
      <div>
        <Loader isLoading={this.state.isLoading} />
        <div className="header">
          <div className="search-container">
            <input type="text" className="search-box" onChange={this.searchText} />
            {
              this.state.isSearchLoad &&
              <span className="search-load-icon">
                <i className="fa fa-spinner fa-spin"></i>
              </span>
            }
            <span className="search-icon" onClick={this.searchBooks}>
              <i className="fa fa-search"></i>
            </span>
            {
              this.state.showAutoComplete &&
              <div className="search-complete">
                {
                  this.state._books && this.state._books.map(book => {
                    let volumeInfo = book.volumeInfo;
                    return (
                      <li key={volumeInfo.title} onClick={() => this.getBookById(book.id)}>{volumeInfo.title}</li>
                    )
                  })
                }
              </div>
            }
          </div>
        </div>
        <div className="m-2">
          <div className="results-container">
            <span>
              Search text: <label>{this.state.searchText}</label>
            </span>
            &nbsp;
            <span>
              Result Count: (<label>{this.state.data && this.state.data.totalItems ? this.state.data.totalItems : 0}</label>)
            </span>
          </div>
          <h3>Preferred Book</h3>
          <div className="row m-0">
            {
              bookById && bookById.volumeInfo &&
              <div className="col-md-6 mb-3">
                <div className="book-container">
                  <img src={bookById.volumeInfo.imageLinks && bookById.volumeInfo.imageLinks.smallThumbnail} />
                  <div className="book-details">
                    <p>{bookById.volumeInfo.title}</p>
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
              </div>
            }
          </div>
          <hr />
          <h3>Related Books</h3>
          <div className="row m-0">
            {
              !this.state.showAutoComplete && this.state._books && this.state._books.map(book => {
                return (
                  <div className="col-md-6 mb-2" key={book.id}>
                    <div className="book-container">
                      <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} />
                      <div className="book-details">
                        <p>{book.volumeInfo.title}</p>
                        <p>By:&nbsp;
                          {book.volumeInfo.authors ? book.volumeInfo.authors.map(author => {
                          return (
                            <span key={author}>
                              {author}
                              {book.volumeInfo.authors.length > 1 && <span>,</span>}
                            </span>
                          )
                        })
                            : <span>Unknown</span>
                          }
                        </p>
                        {
                          book.volumeInfo.averageRating ?
                            <p>
                              <span className="rating">{book.volumeInfo.averageRating}</span>
                              <span className="review">
                                {book.volumeInfo.ratingsCount} <span>Ratings & Reviews</span>
                              </span>
                            </p>
                            :
                            <p className="review">No reviews and ratings available</p>
                        }
                        <p>Published By: {book.volumeInfo.publisher ? book.volumeInfo.publisher : 'Unknown'}</p>
                        <p>Published Date: {book.volumeInfo.publishedDate}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;