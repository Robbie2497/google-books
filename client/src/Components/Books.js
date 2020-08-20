import React, { Component } from "react";
import SearchArea from "./SearchArea";
import BookList from "./BookList";
import request from "superagent";



class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: "",
            sort: ""
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.state.searchField})
        .then((data) => {
            console.log(data);
            const cleanData = this.cleanData(data);
            this.setState({ books: cleanData });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleSort = (e) => {
        console.log(e.target.value);
        this.setState({ sort: e.target.value })
    }

    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty("publishedDate") === false) {
                book.volumeInfo["publishedDate"] = "0000";
            }
            else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
                book.volumeInfo["imageLinks"] = {thumbnail: "https://vignette.wikia.nocookie.net/mc-realm/images/7/72/No_Image_Available.gif/revision/latest?cb=20181031001713"};
            }
            return book;
        })

        return cleanedData;
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const sortedBooks = this.state.books.sort((a, b) => {
            if (this.state.sort === "Newest") {
                return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
            }
            else if (this.state.sort === "Oldest") {
                return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
            }
            return (sortedBooks);
        })

        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} />
                <BookList books={sortedBooks} />
            </div>
        );
    }
}

export default Books;
