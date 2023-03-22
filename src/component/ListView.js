import '../css/ListView.css'
export const ListView = ({items}) => {
    const itemList = [];

    items.forEach((element) => {
       itemList.push(<div className="list-item">
           <img className="list-item-img" src={element.img}/>
           <h2>{element.name}</h2>
           <h3>{element.color}</h3>
           <span className="item-price">${element.price}</span>
           <button className="item-btn">add to cart</button>

       </div>)
    });

    return(
        <div className="items-list">{itemList}</div>
    )

}