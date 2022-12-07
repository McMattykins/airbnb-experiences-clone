export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.openSpots < 10) {
        badgeText = `${props.openSpots} LEFT`
    }
    return (
        <section className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img 
                src={require(`../images/${props.img}.png`)} 
                alt={props.description} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src={require("../images/star.png")} alt="a star" className="card--star" />
                <p>{props.stats.rating} <span className="gray">({props.stats.reviews})</span>・{props.location}</p>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </section>
    )
}