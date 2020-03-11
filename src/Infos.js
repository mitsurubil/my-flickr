import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

const Infos = ({ title, id, server, secret, farm, owner }) => {

    const [infos, setInformations] = useState([]);
    useEffect(() => {
        getInformations();
    }, []);
    const getInformations = async () => {
        const url = `https://www.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=6ac06f8c68276f6ab798f5d5ca012f91&user_id=${owner}&format=json&nojsoncallback=1`;
        const response = await fetch(url);
        const data = await response.json();
        setInformations(data.person.username._content);
        console.log('Data', data.person.username._content);
    }


    return (
        <div className='info'>
            <div className='info-image'>
                <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
            </div>
            <div className='info-text'>
                <h5><a href={`https://flickr.com/photo.gne?id=${id}`}>{title}</a> by <a href={`https://flickr.com/people/${owner}`}>{infos}</a></h5>
                {/* <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                {/* <Dropdown /> */}
            </div>
        </div>
    );
};

export default Infos;
