import loadMoreBtnCss from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ page, onLoad }) {
    return (
        <>
            <button className={loadMoreBtnCss.button} type="button" onClick={() => onLoad(page + 1)}> Load More</button>
        </>
    )
}