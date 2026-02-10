import './Card.css';

const Card = ({ name, price }) => {
    return (
        <div className="product-card">
            <h2 className="product-name">{name}</h2>
            <p className="product-price">${price}</p>
        </div>
    );
};

export default Card;
