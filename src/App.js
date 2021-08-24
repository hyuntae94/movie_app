import React from "react";

/* eslint-disable-next-line */
function Movie({name, url, rating}){
  return  (
    <div>
      <h3 >{name}</h3>
      <img src={url} alt={name}/>
      <span>{rating}</span>
    </div>
  )
}

const FavFood = [
  {
    id :1,
    name : "알라딘",
    url : "https://m.media-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg",
    rating : "rating is : 5.0"
  },
  {
    id : 2,
    name : "알라딘",
    url : "https://m.media-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg",
    rating : "rating is : 4.5"
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
