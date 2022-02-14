import React from "react";
import propTypes from "prop-types";
import {formatPrice} from "../helpers"
class Fish extends React.Component {
    // handleClick = () => {
    //     this.props.addToOrder(this.props.indexOf)
    // }
    static propTypes = {
        details: propTypes.shape({
            image: propTypes.string,
            name: propTypes.string,
            desc: propTypes.string,
            status: propTypes.string,
            price: propTypes.number,
        }),
        addToOrder: propTypes.func
    }
    render() {
        const {desc, image, name, price, status} = this.props.details;
        const isAvailable = status === 'available';
        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">{name}
                <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button onClick={() => this.props.addToOrder(this.props.indexOf)} disabled={!isAvailable}>{isAvailable ? 'Add to cart' : 'Sold out'}</button>
            </li>
        )
    }
}

export default Fish