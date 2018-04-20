import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooksContent from './ListBooksContent';

class BooksApp extends Component {
  static propTypes = {
    shelfs: propTypes.arrayOf(propTypes.string),
    books: propTypes.arrayOf(propTypes.any),
  }

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

  changeShelf = (books) => {
    BooksAPI.update(books)
      .then((books) => {
        this.setState(currentState => ({
          books: currentState.books,
        }));
      });
  }

  /* function resultstoArray (resultsData) {
    var myArray = new Array();
  for (var key in resultsData) {
    myArray.push(resultsData[key]);
  }
  return myArray;
} */

  render() {
    return (
      <div className="app">
        <ListBooksContent shelfs={this.state.shelfs} books={this.state.books} />
      </div>);
  }
}

export default BooksApp;
