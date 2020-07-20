import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard'

// const ImageList = (props) => {
//     const images = props.images.map(image => {
//         return <ImageCard key={image.id} image={image} />
//     });

//     return <div className="image-list">{images}</div>;
// }

class ImageList extends React.Component {

    setImages=()=>{
        const images=this.props.images.map(image => {
            return <ImageCard key={image.id} image={image} />
        });
        return images;
    }
    
    render(){
        return <div className="image-list">{this.setImages()}</div>;
    }
}

export default ImageList;
