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
              <h2 className="bookshelf-title">{shelf}</h2>
            </div>
            {
              books.filter(books => books.shelf === shelf).map((item) => {
                return <BookshelfBooks key={item.id} book={item}/>
              })
            }
          </div>
        </div>))
      }< /div>
        )
  }
}

export default ListBooksContent
