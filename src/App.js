
import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './Componentes/Title';
import { SearchForm } from './Componentes/SearchForm';
import { Component } from 'react';

class App extends Component {

  state = {
    results : []
  }
  _handleResults = (results) => {
    this.setState({results})
  }

  _renderResults = () => {
    const { results } =  this.state
    return results.map(
      movie => { return <p key={movie.imdbID}>{movie.Title}</p> }
    )

  }
  render(){
  return (
    <div className="App">
      <Title>Search movies</Title>
      <div className='SearchForm-wrapper'>
        <SearchForm onResults = {this._handleResults} />
      </div>
      {this.state.results.length === 0
        ? <p>sin resultado</p>
        //: <p>con resultado</p>
        : this._renderResults()
      }
    </div>
  );
  }
}

export default App;
