
import './App.css';
import 'bulma/css/bulma.css'
import { Title } from './Componentes/Title';
import { SearchForm } from './Componentes/SearchForm';

function App() {
  return (
    <div className="App">
      <Title>Search movies</Title>
      <div className='SearchForm-wrapper'>
        <SearchForm/>
      </div>
    </div>
  );
}

export default App;
