import React, { Component } from 'react';
import propTypes from 'prop-types';

class BookshelfBooks extends Component {
  static propTypes = {
    changeShelf: propTypes.func.isRequired,
    book: propTypes.objectOf(propTypes.any).isRequired,
  }
  render() {
    const { book } = this.props;

    this.handleSubmit = (e) => {
      e.preventDefault();
      const shelf = e.target.value;
      if (this.props.changeShelf) {
        this.props.changeShelf(book, shelf);
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
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                  }}
                />
                <div className="book-shelf-changer">
                  <select onClick={this.handleSubmit}>
                    <option value="none" disabled="disabled">Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">Nomne</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors[0]}</div>
            </div>
          </li>
        </ol>
      </div>);
  }
}

export default BookshelfBooks;