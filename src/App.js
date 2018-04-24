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
      'none',
    ],
    query: '',
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  getids = axa => (
    axa.map(book =>
      book.id)
  )

  changeShelf = (books, shelf) => {
    BooksAPI.update(books, shelf).then(() => {
      BooksAPI.getAll().then(() => {
        this.setState(() => ({ books }));
      });
    });
  }

  updateQuery = (query) => {
    console.log('query', query);
    const uQBooks = this.state.books
    if (query) {
      BooksAPI.search(query).then((b) => {
        if (b) {
          const booksAllreadyOnShelf = uQBooks.filter(book =>
            (this.getids(b).includes(book.id)));
          const booksNotOnShelf = b.filter(book =>
            (!this.getids(this.state.books).includes(book.id)));
          booksNotOnShelf.map(book => book.shelf = 'none');
          const allResultBooks = booksAllreadyOnShelf.concat(booksNotOnShelf);
          this.setState(() => ({ books: allResultBooks }));
        } else {
          this.setState(() => ({ books: [] }));
        }
      });
    }
  }

  /*         this.setState((currentState) => ({
            contacts: currentState.contacts.concat([contact])
          })) */

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
              query={this.state.query}
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
