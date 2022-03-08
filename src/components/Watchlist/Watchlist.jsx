export default function Watchlist(props) {
    return(
        <div className="watchlist">
            <p className="title">{props.post._id}</p>
            <p className="content">{props.post.content}</p>
        </div>
    )
}