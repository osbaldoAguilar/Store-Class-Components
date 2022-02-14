import React from "react";
import propTypes from 'prop-types'
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group"
class Order extends React.Component {
    static propTypes ={
        fish: propTypes.object,
        order: propTypes.object,
        removeOrder: propTypes.func
    }
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        if(!fish)   return null;
        const isAvailable = fish && fish.status === 'available';
        const transitionOptions = {
            classNames: 'order',
            key: key,
            timeout: {enter: 500, exit: 500}
        };
        if(!isAvailable) {
            return <CSSTransition {...transitionOptions}> 
            <li>
                Sorry { fish ? fish.name : 'fish'} is no longer available
            </li>
            </CSSTransition>
        }
        return <CSSTransition {...transitionOptions}>
                        <li key={key} style={{listStyle: 'none'}}>
                            <span>
                            <TransitionGroup component="span" className="count">
                                <CSSTransition classNames="count" key={count} timeout={{enter: 500, exit: 500}}>
                                    <span>{count}</span> 
                                </CSSTransition>
                            </TransitionGroup>lbs {fish.name}
                                {formatPrice(count * fish.price)}
                            <button onClick={() => this.props.removeOrder(key)}>&times;</button>
                            </span>
                    </li>
                </CSSTransition>
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key)=> {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return prevTotal + (count * fish.price)
            }
            return prevTotal;
        }, 0)
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                {/* <ul>
                    {orderIds.map(this.renderOrder)}
                    {/* {orderIds.map(key => <li>{key}</li>)} */}
                {/* </ul> */} 
                <TransitionGroup component='ul'>
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    total: <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order