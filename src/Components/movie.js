import React from 'react'
import Button from 'react-bootstrap/Button';
import {Card } from 'react-bootstrap';

export default function Movie(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src=" http://image.tmdb.org/t/p/+{props.movie.poster_path}" />
  <Card.Body>
    <Card.Title>{props.movie.original_title}</Card.Title>
    <Card.Text>
    {props.movie.overview}
    </Card.Text>
    <Button variant="primary">Details</Button>
  </Card.Body>
</Card>
console.log("hi")
        </div>
    )
}
