import { useState } from 'react';
import GalleryItem from './GalleryItem';
import Image from '../Image';

const Gallery = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);

    const handleClickOpen = (id, imageURL) => {
        setOpen(true)
        setId(id);
        //setImageUrl(imageURL);
        console.log(imageURL);
        console.log(id);
    }

    const handleClickClose = () => {
        setOpen(false)
    }

    if(open) {
        return <Image id={id} close={handleClickClose} data={data} />;
    }
    else if(!open) {
        return (
            <div>
                {data.images.map((image, i) => {
                    return (
                        <GalleryItem key={i} id={image.id} url={image.url} click={handleClickOpen} />
                    )
                })}
            </div>
            )
    }

    return (
        <div>
            {data.images.map((image, i) => {
                return (
                    <GalleryItem key={i} url={image.url} click={handleClickOpen} />
                )
            })}
        </div>
    )

}

export default Gallery;