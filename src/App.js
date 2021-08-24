/* eslint-disable */

import React from "react";
import PropTypes from "prop-types"


Movie.propTypes = {
  name : PropTypes.string.isRequired, //name 프로퍼티는 필수
  url : PropTypes.string.isRequired,
  rating : PropTypes.number // rating프로퍼티는 필수아님 대신 존재한다면 number타입이여야함
}


function Movie({name, url, rating}){
  return  (
    <div>
      <h3 >{name}</h3>
      <img src={url} alt={name}/>
      <span>{rating}/5.0</span>
    </div>
  )
}


const FavFood = [
  {
    id :1,
    name : "알라딘",
    url : "https://m.media-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg",
    rating : "4.8"
  },
  {
    id : 2,
    name : "알라딘",
    url : "https://m.media-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg",
    rating : 4.3
  }
]

function renderMovie(list){
  return <Movie key={list.id} name={list.name} url={list.url} rating ={list.rating}/>
}

function App(){
  return (
    <div> 
      <h1>MovieList</h1>
      { FavFood.map(renderMovie) }
    </div>
  )
}

export default App;
