import imageCardCss from "./ImageCard.module.css"
import { Image } from '../App/App';

type ImageCardProps = {
    imageStats: Image;
}


export default function ImageCard({ imageStats }: ImageCardProps) {
    return (
        <div>
            <img src={imageStats.urls.small} alt={imageStats.alt_description} className={imageCardCss.galleryImage}></img>
        </div>
    )
}