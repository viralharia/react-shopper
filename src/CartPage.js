import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function emptyCart(){
    return (
        <div className="Empty-Cart">
            <p>Your cart is empty.</p>
            <p>Why not add some expensive products to it?</p>
        </div>
    );
}

function CartPage({ items, onAddOne, onRemoveOne }){
    if(items.length === 0){
        return emptyCart();
    }else{
        return ( items.length >= 1 &&
            <div className="CartPage">
                <ul className="CartPage-items">
                    {items.map(item =>
                        <li key={item.id} className="CartPage-item">
                            <Item item={item}>
                            <div className="CartItem-controls">
                                <button
                                    className="CartItem-removeOne"
                                    onClick={() => onRemoveOne(item)}>&ndash;
                                    </button>
                                    <span className="CartItem-count">{item.count}</span>
                                <button
                                    className="CartItem-addOne"
                                    onClick={() => onAddOne(item)}>+
                                    </button>
                            </div>
                            </Item>
                        </li>
                    )}
                </ul>
                <div className="Total-CartValue">
                    Total: ${items.reduce((total, item) => {
                        return (total += (item.price * item.count));
                    },0)}
                </div>   
            </div>
            
        );
    }

    
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
