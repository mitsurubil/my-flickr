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

    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=e3ddd109b23c91d1fa00173dc86818c7&gallery_id=66911286-72157712805674251&format=json&nojsoncallback=1&auth_token=72157713376262756-7d7f8b283797088f&api_sig=44f60b1997a8efb7379a066851d39c64`);

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

