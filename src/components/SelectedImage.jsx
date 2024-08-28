

const SelectedImage = ({ id, imageUrl, close, prev, next }) => {
    console.log(id);
    console.log(imageUrl)

    let sectionStyle = {
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor:"black"
    };
    let arrowStyle = {
        fontSize: "2.5rem",
        color: "white",
    };
    return (
        <div className="selected-image" style={sectionStyle}>
            {/* <img src={Background} /> */}
            <div className="close">
                <button className='close-button' onClick={close}>
                    <i class="bi bi-x"
                    style={arrowStyle}></i>
                </button>
            </div>
            <div className="gallery-button">
                
                <div className="prev-next">
                    <button className="previous" onClick={prev}>
                        <i class="bi bi-chevron-left" style={arrowStyle}></i>
                    </button>
                    <button className="next" onClick={next}>
                        <i class="bi bi-chevron-right" style={arrowStyle}></i>
                    </button>
                </div>
            </div>
            
            <p className="image-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}

export default SelectedImage;