import './ProductResultCard.css';
import { useNavigate } from 'react-router';

const ProductResultCard = ({ product }) => {
    const navigate = useNavigate();
    const { id, title, price, thumbnail } = product;

    const handleviewprod = () => {
        navigate(`/${id}/view`);
    };

    return (
        <div className="card" style={{ width: "18rem" }} onClick={handleviewprod}>
            <img src={thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-title">{title}</p>
                <p className="card-price">Price: {price}</p>
            </div>
        </div>
    );
};

export { ProductResultCard };
