import React, { Component } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';





class Favorites extends Component {
    state = { 
        title: '',
        image: '',
        link: '',
        published:'',
        favorites: []
     }
    

    componentDidMount = () => {
        // this.displayFavorites();
        axios.get('/api/favorites')
        .then(res => {
            console.log(res);
            this.setState({ favorites: res.data })
            console.log(this.state);
        })
    };

    displayFavorites = (favorites) => {
        if(!favorites.length) return <div className="white">
            <h1>No Favorites Saved Yet</h1>
            <a className="white" href="/" rel="Home">Click here to go Home</a>
            </div>

        console.log("display favorites works...")

        
        return favorites.map((favorites, i) => (
            <div>
            <i className="fas fa-book fa-2x favHeader" />
            <h1 className="favHeader">Favorite Books</h1>
            <a className="left-nav" href="/" rel="Home">Home</a>
            <div className="container book-card-container">
        <div className="card-container">
        </div>
        </div>

            <div className="container book-card-container" key={i}>
        <div className="card-container">
            <img src={favorites.image} alt="" />
            <div className="desc">
                <h2 className="black">{favorites.title}</h2>
                <h3>Author: {favorites.author}</h3>
                <p>Published Year: {favorites.published === "0000" ? "Not Available" : favorites.published.toString().substring(0, 4)}</p>
            </div>
            </div>
         <div>
         <Button href={favorites.link} className="viewBtn">View Book</Button>
         </div>
         </div>
         </div>
        ));
    

        };

    render() {
        return (
            <header>
            <i className="fas fa-book fa-2x favHeader" />
            <h1 className="favHeader">Favorite Books</h1>
            <a className="left-nav" href="/" rel="Home">Home</a>
            <div className="container book-card-container">
        <div className="card-container">
            { this.displayFavorites(this.state.favorites)}
        </div>
        </div>
        </header> 
    )
}
}

export default Favorites;