import React, { Component } from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class BookshelfBooks extends Component {
  static propTypes = {
    changeShelf: propTypes.func.isRequired,
    book: propTypes.objectOf(propTypes.any).isRequired,
  }
  render() {
    const { book, changeShelf } = this.props;

    this.handleSubmit = (e) => {
      e.preventDefault();
      const shelf = e.target.value;
      if (changeShelf) {
        changeShelf(book, shelf);
      }
    };
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{ height: 192,
                           width: 128,
                           backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})` }}
                />
                <div className="book-shelf-changer">
                  <select value={book.shelf} onChange={this.handleSubmit}>
                    <option value="moveto" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    {window.location.pathname == '/search' ?
                    <option value="none">None</option> : ''
                    }
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors !== undefined ? book.authors.join(', ') : ''}</div>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

export default BookshelfBooks;
