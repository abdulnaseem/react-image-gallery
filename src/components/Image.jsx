import { useState } from 'react';
import SelectedImage from './SelectedImage';

const Image = ({ id, close, data }) => {
    const [current, setCurrent] = useState(id);
    const length = data.images.length;
    
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log('Next');
    }

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log('Previous');
    }

    
    return (
        <div>
            {
                data.images
                .filter((image) => image.id === current)
                .map((image, index) => {
                        return <SelectedImage key={index} id={image.id} imageUrl={image.url} close={close} prev={prev} next={next} />
                    
                })
            }
        </div>
    )
}

export default Image;