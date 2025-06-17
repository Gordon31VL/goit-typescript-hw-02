import ImageCard from "../ImageCard/ImageCard"
import imageGalleryCss from "./ImageGallery.module.css"

type Image = {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  };
  

type ImageGalleryProps = {
    images: Image[];
    onImageClick: (image: Image) => void;
}
export default function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
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