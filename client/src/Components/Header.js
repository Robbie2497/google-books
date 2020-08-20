import React from "react";



const Header = () => {
    return (
        <header>
            <i className="fas fa-book fa-2x" />
            <h1>Google Books</h1>
            <a className="right-nav" href="/favorites" rel="Home">Favorites <i className="far fa-star"></i></a>
        </header>
    )
}

export default Header;