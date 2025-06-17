import loadMoreBtnCss from './LoadMoreBtn.module.css'

type LoadMoreBtnProps = {
    page: number;
    onLoad: (nextPage: number) => void;
} 

export default function LoadMoreBtn({ page, onLoad }: LoadMoreBtnProps) {
    return (
        <>
            <button className={loadMoreBtnCss.button} type="button" onClick={() => onLoad(page + 1)}> Load More</button>
        </>
    )
}