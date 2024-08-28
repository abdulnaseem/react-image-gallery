

const GalleryItem = ({ id, url, click }) => {

    return (
        <div className="gallery-image" onClick={() => click(id, url)}>
            <img className="gallery-image-item" src={url} alt="" />
        </div>
    )
}

export default GalleryItem;