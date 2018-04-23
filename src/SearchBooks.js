import React, { Component } from 'react';
import propTypes from 'prop-types';
import ListBooksContent from './ListBooksContent';

class SearchBooks extends Component {
  /* static propTypes = {
    changeShelf: propTypes.func.isRequired,
    book: propTypes.objectOf(propTypes.any).isRequired,
  } */
  render() {
    const { books, shelfs, changeShelf, updateQuery } = this.props;
return (
  <div className="search-books-wrapper">
    <div className="search-books">
      <div className="search-books-bar">
        <a
          href="/"
          className="close-search"
        >Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={e => updateQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
    <ListBooksContent
      shelfs={shelfs}
      books={books}
      changeShelf={changeShelf}
    />
  </div>
    );
  }
}

export default SearchBooks;
