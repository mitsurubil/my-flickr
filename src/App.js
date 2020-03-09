import React, { useEffect, useState } from 'react';
import Form from './Form';
import Infos from './Infos';
import Spinner from './Spinner';
import './App.css';

const App = () => {

  const [infos, setInfos] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('cats');
  useEffect(() => {
    getInfos();
  }, [query]);
  const getInfos = async () => {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6ac06f8c68276f6ab798f5d5ca012f91&tags=${query}&text=-naked%2C+-ass%2C+-sexy&format=json&nojsoncallback=1`);
    const data = await response.json();
    setInfos(data.photos.photo);
    console.log('array', data.photos.photo);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    console.log('search', search);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>my Flickr</h1>
        <Form
          search={search}
          updateSearch={updateSearch}
          getSearch={getSearch}
        />
      </header>
      <Spinner />
      <section className='App-body'>
        {infos.map(info => (
          <Infos
            key={info.id}
            title={info.title}
            secret={info.secret}
            server={info.server}
            farm={info.farm}
            id={info.id}
            owner={info.owner}
          />
        ))}
      </section>
    </div>
  );
};

export default App;

