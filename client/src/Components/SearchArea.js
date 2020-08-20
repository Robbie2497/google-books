import React from "react";
import "../App.css";



const SearchArea = (props) => {
    return (
        <div className= "container books-img">
            <div className="row">

            </div>
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" className="search-form" placeholder="Search for a book..." />
                <button type="submit" className="search-btn">Search</button>
                <select defaultValue="Sort" onChange={props.handleSort} className="sort-btn">
                    <option disabled value="Sort">Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
        </div>
    )
}

export default SearchArea;