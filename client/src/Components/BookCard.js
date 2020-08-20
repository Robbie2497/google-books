import React from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";

const BookCard = (props) => {

const handleAddFavorite = () => {
    const data = {
        image: props.image,
        title: props.title,
        author: props.author,
        published: props.published,
        link: props.link,
    }
    axios.post('/api/favorites', data)
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

    return (
        <div className="container book-card-container">
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>Author: {props.author}</h3>
                <p>Published Year: {props.published === "0000" ? "Not Available" : props.published.substring(0, 4)}</p>
            </div>
            </div>
         <div>
         <Button href={props.link} className="viewBtn">View Book</Button>
         <Button className="favBtn" variant="primary" onClick={handleAddFavorite}>Favorite <i class="fas fa-star"></i></Button>
         </div>
         </div>
    )
}

export default BookCard;