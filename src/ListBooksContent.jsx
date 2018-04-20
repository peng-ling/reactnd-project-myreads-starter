import React, { Component } from 'react';
import BookshelfBooks from './BookshelfBooks';
import changeShelf from './App';
import * as BooksAPI from './BooksAPI';

class ListBooksContent extends Component {
  changeShelf = (books) => {
    BooksAPI.update(books)
      .then((books) => {
        this.setState(currentState => ({
          books: currentState.books,
        }));
      });
  }

  render(){
    const { books } = this.props;
    return (
      <div className="list-books-wrapper">
        {this.props.shelfs.map(shelf => (
          <div key={shelf} className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                {
                 this.props.books.filter(books => (books.shelf === shelf)).map(item => (
                   <BookshelfBooks
                     onchangeShelf={(books) => {
                                 this.changeShelf(books);
                                 { /* history.push('/') */ }
                               }}
                     key={item.id}
                     book={item}
                   />
               ))}
              </div>
            </div>
          </div>))}
      </div>
    )
  }

}



export default ListBooksContent
