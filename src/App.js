import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SuperHero from './Components/SuperHero';
import { useState } from 'react';

const User = () => {

  return (
    <div>
      <label>Nama</label>
      <h4>Agus Sunandar</h4>
      <label>Jurusan</label>
      <h4>Teknik Informatika</h4>
    </div>
  );
}

function App() {

  const [heroes, setHeroes] = useState(HEROES);

  const hapus = name => () => {
    console.log('Anda hapus ', name);
    setHeroes(current => current.filter(e => e.name != name));
  }

  const reset = () => {
    setHeroes(HEROES)
  }

  return (
    <div style={{ width: 600, margin: '0 auto' }}>
      <h1>Daftar Super Hero</h1>
      <hr />
      {
        heroes.map((item, i) => (
          <SuperHero name={item.name}
            color={item.color} hapus={hapus} />
        ))
      }
      <hr />
      <button onClick={reset} type='button' className='btn btn-primary'>Reset</button>
    </div>
  );
}

const HEROES = [
  { name: 'IronMan', color: 'red' },
  { name: 'SpiderMan', color: 'blue' },
  { name: 'Thor', color: 'orange' },
  { name: 'Hulk', color: 'green' },
  { name: 'Captain America', color: 'blue' },
  { name: 'Black Panther', color: 'black' },
  { name: 'Batman', color: 'black' }
];

export default App;
