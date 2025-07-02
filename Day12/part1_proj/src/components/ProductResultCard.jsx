import './ProductResultCard.css'
const ProductResultCard = (props)=>{
    const {title,price,thumbnail} =props;
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-title">{title}</p>
                <p className="card-price">Price: {price}</p>
            </div>
        </div>
    )
}
export {ProductResultCard};