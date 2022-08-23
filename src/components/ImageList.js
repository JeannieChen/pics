import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((i) => {
        return <img alt={i.description} key={i.id} src={i.urls.small} />;
    });

    return <div>{images}</div>
};

export default ImageList;