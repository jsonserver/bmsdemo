import React from 'react';
import LoaderSrc from './loader.gif'

const Loader = props => (
    <div>
        <img style={{ width: 75 }} src={LoaderSrc} alt="Loading ..." />
    </div>
);

export default Loader;