import React from 'react';
import propTypes from 'prop-types';
import BookshelfBooks from './BookshelfBooks';

const ListBooksContent = props => (
  <div className="list-books-content-wraper">
    {props.shelfs.filter((shelf) => shelf  !== 'none').map(shelf => (
      <div key={shelf} className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            {
             props.books.filter(books => (books.shelf === shelf)).map(item => (
               <BookshelfBooks
                 changeShelf={props.changeShelf}
                 key={item.id}
                 book={item}
               />))
           }
          </div>
        </div>
      </div>))}
  </div>);

ListBooksContent.propTypes = {
  shelfs: propTypes.arrayOf(propTypes.string).isRequired,
  books: propTypes.arrayOf(propTypes.any).isRequired,
};

export default ListBooksContent;
