import React from 'react';

const Spinner = () => {
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });
    return (
        <div className="loader">
            <div><iframe src="https://giphy.com/embed/y1ZBcOGOOtlpC" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe></div>
        </div>
    );

};

export default Spinner;