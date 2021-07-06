
import axios from 'axios'
import React, { Component } from 'react'
import SearchForm from './searchform.js'
import MovieCard from './moviecard.js'
import './style1.css'

export default class searchbar extends Component {
    constructor(props){
        super(props)
        this.state={
            movies:[],
            searchterm:''
        }
        this.api_Key='9f152a0a582d2b689f65595386c76574'
    }
    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_Key}`).then(res=>{
       
    
            this.setState({
                movies:res.data.results
            })
        })
    }

onSubmit=(e)=>{
    e.preventDefault()
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_Key}&query=${this.state.searchterm}`).then(res=>{
       console.log(res.data.results)
    
        this.setState({
            movies:res.data.results
        })
    })
}

onChange=(e)=>{
this.setState({
    searchterm:e.target.value
})
}
    render() {
      
        return (
            <div>
                <SearchForm onChange={this.onChange} onSubmit={this.onSubmit}/>
                <div className="moviecard" >
                {this.state.movies.map(movie=>{
                 return <MovieCard  movie={movie}/>
                })}
                </div>
            </div>
        )
            }
}
