import React from 'react';

interface ArrowProps {
    image:string;
    altImage: string;
}

const Arrow: React.FC<ArrowProps> = ({ image, altImage }) => {
    return (
        <div>
            <img src={image} alt={altImage}/>
        </div>
    );
}

export default Arrow;






