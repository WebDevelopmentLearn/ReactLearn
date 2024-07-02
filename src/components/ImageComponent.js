import image1 from '../assets/image1.png';
import "../ImageComponent.css"

function ImageComponent() {
    return (
       <img className={"imageComponent"} src={image1} alt={"image1"}/>
    );
}

export default ImageComponent;