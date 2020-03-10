/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/app.scss';

import { appContext } from './components/contexts/context';

import { getData } from './API';
import Loader from './components/loader';
import PrefComponent from './components/prefComponent';
import RelatedComponent from './components/relatedComponent';
import Header from './components/header';
import SearchComponent from './components/searchComponent';


import Router from './router';

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

  // when search on text box
  searchText = (e) => {
    this.setState({
      searchText: e.target.value
    });

    // debounce exception for 300 milli seconds
    setTimeout(() => {
      this.searchBooks();
    }, 300);
  }

  searchBooks = () => {
    // maxResults=10&startIndex=0
    this.setState({
      isSearchLoad: true,
      showAutoComplete: true
    });

    const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

    // api call to get search results
    getData(apiUrl + this.state.searchText).then(res => {
      const resData = res.data;
      this.setState({
        data: resData,
        _books: resData.items,
        isSearchLoad: false
      })
    })
  }

  // to get individual book by book id
  getBookById = (bookId) => {
    this.setState({
      isLoading: true
    })
    // https://www.googleapis.com/books/v1/volumes/volumeId

    const apiUrl = 'https://www.googleapis.com/books/v1/volumes/';
    getData(apiUrl + bookId).then(res => {
      const resData = res.data;
      this.setState({
        showAutoComplete: false,
        bookById: resData,
        isLoading: false
      })
    })
  }

  loadMoreBooks = () => {
    const startIndex = this.state._books.length + 1;
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchText + '&startIndex=' + startIndex;
    this.setState({
      isLoading: true
    });

    // api call to get search results
    getData(apiUrl).then(res => {
      const resData = res.data;
      const totalBooks = [...this.state._books, ...resData.items];
      this.setState({
        _books: totalBooks,
        isLoading: false
      });
    })
  }

  render() {
    return (
      <appContext.Provider
        value={{
          state: this.state,
          searchText: this.searchText,
          searchBooks: this.searchBooks,
          getBookById: this.getBookById,
          loadMoreBooks: this.loadMoreBooks
        }}
      >
        <Router />
      </appContext.Provider>
    );
  }
}

export default App;

// eager loading -- 
// excetions handling
// test cases
// high level approach applications
// paggination
// documents on all those things -- bundle
// split into components
// memory leakage --- 