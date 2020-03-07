import React, { useEffect, useState } from 'react';
import Form from './Form';
import Infos from './Infos';
import './App.css';

const App = () => {

  const [infos, setInfos] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getInfos();
  }, [query]);

  const getInfos = async () => {

    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=ea3ca670f9a42e0c869a2938608bc4dc&gallery_id=66911286-72157712805674251&format=json&nojsoncallback=1&auth_token=72157713394026068-bb10c360ad9c0aea&api_sig=0a4ad7ea718fc6707e3eb4c8f1f781a7`);

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

