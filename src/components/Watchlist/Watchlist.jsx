export default function Watchlist(props) {
    return(
        <div className="watchlist">
            <p className="title">{props.player.id}</p>
            <p className="content">{props.player.first_name}</p>
        </div>
    )
}