import React from 'react';
import loaderImg from '../images/ripple.gif';

import '../scss/loader.scss';

// loader component to show animation
const Loader = (props) => (
    <div className={props.isLoading ? 'rec-loader show': 'rec-loader hide'} >
        <img src={loaderImg} className="rec-loader-img" />
    </div >
);

export default Loader;