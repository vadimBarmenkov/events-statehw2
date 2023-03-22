import '../css/CardView.css'

export const CardsView = ({cards}) => {
    const ShopCards = [];


    cards.forEach((element) => {
        ShopCards.push(<div className="shop-card">
            <h2>{element.name}</h2>
            <h3>{element.color}</h3>
            <img className="item-img" src={element.img}/>
            <div className="description-item">
                <span>${element.price}</span>
                <button>add to card</button>
            </div>
        </div>);
    })


    return(
        <div className="shop-cards">{ShopCards}</div>
    )
}