import imageCardCss from "./ImageCard.module.css"
export default function ImageCard({ imageStats }) {
    return (
        <div>
            <img src={imageStats.urls.small} alt={imageStats.alt_description} className={imageCardCss.galleryImage}></img>
        </div>
    )
}