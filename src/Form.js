import React from 'react';
import searchIcon from "./img/search.svg";

const Form = ({ getSearch, search, updateSearch }) => {
    return (
        <form onSubmit={getSearch} className='search-form'>
            <div type='submit' className='Search-icon'>
                <input
                    type='text'
                    className='search-bar'
                    placeholder='Search'
                    value={search}
                    onChange={updateSearch}
                />
                <img onClick={getSearch} src={searchIcon} alt={searchIcon} className="icon"/>
            </div>
        </form>
    );
};

export default Form;