import React from 'react';
import searchIcon from "./img/search.svg";

const Form = ({ getSearch, search, updateSearch }) => {
    return (
        <form onSubmit={getSearch} className='search-form'>
            <div className='Search-icon' type='submit'>
                <input
                    type='text'
                    className='search-bar'
                    placeholder='Search'
                    value={search}
                    onChange={updateSearch}
                />
                <img className="icon" src={searchIcon} alt={searchIcon} />
            </div>
        </form>
    );
};

export default Form;