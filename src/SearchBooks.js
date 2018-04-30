import React from 'react';
import propTypes from 'prop-types';
import BookshelfBooks from './BookshelfBooks';

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
    {
      props.books.map(item => (
        <BookshelfBooks
          changeShelf={props.changeShelf}
          key={item.id}
          book={item}
        />))
    }
  </div>
);

SearchBooks.propTypes = {
  changeShelf: propTypes.func.isRequired,
  updateQuery: propTypes.func.isRequired,
  books: propTypes.arrayOf(propTypes.any).isRequired,
};

export default SearchBooks;
