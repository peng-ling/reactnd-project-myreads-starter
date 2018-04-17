import React, {Component} from 'react'
import BookshelfBooks from './BookshelfBooks'

class ListBooksContent extends Component {

  render() {

    const {shelfs, books} = this.props
    return (<div className="list-books-wrapper">
      {
        shelfs.map((shelf) => (<div key={shelf} className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
            </div>
            {
              books.map((book) => {
                return <BookshelfBooks key={book.id} book={book}/>
              })
            }
          </div>
        </div>))
      }< /div>
        )
  }
}

export default ListBooksContent
