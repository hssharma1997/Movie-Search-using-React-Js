import React from 'react'
import {Card } from 'react-bootstrap';
import './style1.css'


export default function Moviecard(props) {
  

    
    var poster=props.movie.poster_path;
    if(props.movie.poster_path==null)
    {poster=props.movie.backdrop_path}

    return (
       
    <div className="div_card" >
                
        <Card className="card" > 
            <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${poster}`} style={{ width:'100%'}}/>
            <Card.Body style={{padding:'15px 0px'}}>
                <Card.Title>{props.movie.original_title}</Card.Title>
            </Card.Body>
        </Card>
    
        
         
            
    </div>
    )
}
