import ImageCard from "../ImageCard/ImageCard"
import imageGalleryCss from "./ImageGallery.module.css"
export default function ImageGallery({ images, onImageClick }) {
    return (
        <ul className={imageGalleryCss.gallery}>
            {images.map((image) => {
                return(
                    <li key={image.id} onClick={() => onImageClick(image)}>
                    <ImageCard imageStats={image}></ImageCard>
                    </li>
                )
            })}
        </ul>
    )
}