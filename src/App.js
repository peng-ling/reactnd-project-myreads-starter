import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooksContent from './ListBooksContent';

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
        )}
        />
        <Route
          path="/search"
          render={() => (
            <div>Search</div>
          )}
        />
      </div>);
  }
}

export default BooksApp;
