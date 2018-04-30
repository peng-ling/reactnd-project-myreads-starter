import React from 'react';
import propTypes from 'prop-types';
import ListBooksContent from './ListBooksContent';

const SearchBooks = props => (

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
            onChange={e => props.updateQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
    <ListBooksContent
      shelfs={props.shelfs}
      books={props.books}
      changeShelf={props.changeShelf}
    />
  </div>
);

SearchBooks.propTypes = {
  changeShelf: propTypes.func.isRequired,
  updateQuery: propTypes.func.isRequired,
  books: propTypes.arrayOf(propTypes.any).isRequired,
  shelfs: propTypes.arrayOf(propTypes.string).isRequired,
};

export default SearchBooks;
