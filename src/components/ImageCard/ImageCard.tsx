import imageCardCss from "./ImageCard.module.css"

type ImageStats = {
    urls: {
        small: string;
    },
    alt_description: string;
}

type ImageCardProps = {
    imageStats: ImageStats;
}


export default function ImageCard({ imageStats }: ImageCardProps) {
    return (
        <div>
            <img src={imageStats.urls.small} alt={imageStats.alt_description} className={imageCardCss.galleryImage}></img>
        </div>
    )
}