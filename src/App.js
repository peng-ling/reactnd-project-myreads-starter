import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooksContent from './ListBooksContent'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfs: [
      "currentlyReading", "wantToRead", "read"
    ],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({books}))
    })
  }

  render() {

    return (<div className="app">
      <ListBooksContent shelfs={this.state.shelfs} books={this.state.books}/>
    </div>)
  }
}

export default BooksApp
