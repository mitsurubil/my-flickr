import React from 'react';
import Dropdown from './Dropdown';

const Infos = ({ title, id, server, secret, farm, owner }) => {
    return (
        <div className='info'>
            <div className='info-image'>
                <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
            </div>
            <div className='info-text'>
                <h5><a href={`https://flickr.com/photo.gne?id=${id}`}>{title}</a> by <a href={`https://flickr.com/people/${owner}`}>{owner}</a></h5>
                <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Dropdown />
            </div>
        </div>
    );
};

export default Infos;