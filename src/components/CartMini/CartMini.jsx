import React from 'react'
import { useCart } from 'react-use-cart'

const CartMini = (props) => {
    const { items, removeItem } = props

    return (
        <>
            <div className="mini-product-container gl-scroll u-s-m-b-15">

                {/*====== Card for mini cart ======*/}
                {items.map((item, index) => (
                    <div key={index} className="card-mini-product">
                        <div className="mini-product">
                            <div className="mini-product__image-wrapper">

                                <a className="mini-product__link" href="#product-detail.html">

                                    <img className="u-img-fluid" src={item.thumbnail} alt="" /></a></div>
                            <div className="mini-product__info-wrapper">

                                <span className="mini-product__category">

                                    <a href="#shop-side-version-2.html">{item.category_id.name}</a></span>

                                <span className="mini-product__name">

                                    <a href="#product-detail.html">{item.name}</a></span>

                                <span className="mini-product__quantity">{item.quantity} x</span>

                                <span className="mini-product__price">${item.price}</span></div>
                        </div>

                        <a className="mini-product__delete-link far fa-trash-alt" onClick={() => removeItem(item.id)}></a>
                    </div>
                ))}
                {/*====== End - Card for mini cart ======*/}
            </div>
        </>
    )
}

export default CartMini
