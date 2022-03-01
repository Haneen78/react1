import React, { Component } from 'react';
import { getMovies } from './Fake/fakeM';
class Movies extends Component {
  state = {
    movies: getMovies(),
  }
  delete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    //console.log(movies);
    this.setState({ movies: movies });
  }

  open = () => {
    Add.style.display = "block"

  }
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p className='text-center display-4'>there's no Movies in database yet</p>
    return (
      <main className='container'>

        <p className='p1'>There's {count} Movies in database</p>
        <div className='div'>
          <h1 className='text'>
            <button className='btn' onClick={() => this.open()}><i class="fa fa-plus" id='add'></i></button>
            Add a new movie
          </h1>
        </div>
        <div className='div1'>
          <div className='div2'>
            <i className="fa fa-plus"></i>
            <form>
              <input input type="text" placeholder="Title" id="name"></input>
              <input input type="text" placeholder="Genre" id="name"></input>
              <input input type="text" placeholder="NumberInStock" id="name"></input>
              <input input type="text" placeholder="DailyRentalRate" id="name"></input>
            </form>
            <button className="save">
              <i className="fa fa-save"></i> Save
            </button>
            <div className="close" onClick={() => this.close()}>
              <i className="fa fa-window-close"></i>
            </div>
          </div>
        </div>
        <table className='table table-striped table-hover border mt-5'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>NumberInStock</th>
              <th>DailyRentalRate</th>
              <th>Delet</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie =>
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => this.delete(movie)}>
                    <i className='fa fa-trash'></i>
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </main>
    );
  }
}

export default Movies;
