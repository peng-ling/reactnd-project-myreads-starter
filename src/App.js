import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooksContent from './ListBooksContent';
import SearchBooks from './SearchBooks'


class BooksApp extends Component {
  static defaultProps = {
    shelfs: ['currentlyReading',
      'wantToRead',
      'read',
    ],
    books: [],
  };
  state = {
    books: [],
    shelfs: [
      'currentlyReading',
      'wantToRead',
      'read',
    ],
    query: '',
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  changeShelf = (books, shelf) => {
    BooksAPI.update(books, shelf).then((books) => {
      BooksAPI.getAll().then((books) => {
        this.setState(() => ({ books }));
      });
    });
  }

  updateQuery = (query) => {
    if (!query) {
      this.setState({ query: '', books: [] })
    } else {
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          books = []
        }
        books.map(book =>
          (this.props.books
            .filter(item => item.id === book.id)
            .map(item => book.shelf = item.shelf)));
        this.setState({ books });
      })
    }
  }


  /* function resultstoArray (resultsData) {
    var myArray = new Array();
  for (var key in resultsData) {
    myArray.push(resultsData[key]);
  }
    rn myArray;
} */

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books-wrapper">
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <ListBooksContent
                  shelfs={this.state.shelfs}
                  books={this.state.books}
                  changeShelf={this.changeShelf}
                />
              </div>
              <div className="open-search">
                <a
                  href="/search"
                  /*onClick={e => (e.preventDefault())}*/
                >Add a book
                </a>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              shelfs={this.state.shelfs}
              books={this.state.books}
              changeShelf={this.changeShelf}
              updateQuery={this.updateQuery}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
