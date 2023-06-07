import './App.css';
import { getMovieList, searchMovie } from './api';
import { useEffect, useState } from 'react';

const App = () => {
const [popularMovies, setPopularMovies] = useState ([ ])

  useEffect(() => {
    getMovieList(). then((result) => {
      // setPopularMovies(getMovieList())
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
          <div className="Movie-data">Release : {movie.release_date}</div>
          <div className="Movie-rate">Rating : <span className="rating-text">{movie.vote_average}</span></div>
        </div>
      )
    })
  }
const search = async (q) => {
  if(q.length > 3) { 
  const query = await searchMovie(q)
  setPopularMovies(query.results)

  }
}

console.log({ popularMovies: popularMovies})

  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar navbar-transparent">
        <div className="container">
          <div className="navbar-header">
           <h1><a className="navbar-brand text-danger" href="#">Movielist</a></h1> 
          </div>

          <div className="navbar-form navbar-center">
            <div className="form-group">
              <input placeholder='cari film' className='form-control'onChange={({target}) => search(target.value)} />
              </div>
          </div>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-danger">Register</button>
              <button className="btn btn-outline-danger ml-2">Logins</button>
            </li>
           
          </ul>
        </div>
      </nav>
       <div className="Movie-container">
        <PopularMovieList />
        </div>
     
      </header>
    </div>
    
  )
  }

export default App;
