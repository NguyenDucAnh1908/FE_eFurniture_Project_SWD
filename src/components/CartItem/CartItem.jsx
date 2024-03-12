import React from 'react'

const CartItem = (props) => {
    const { items, updateItemQuantity, removeItem } = props;
    //console.log("Check items: ", items);
    return (
        <>
            {items.map((item, index) => (
                <tr key={index}>
                    <td>
                        <div className="table-p__box">
                            <div className="table-p__img-wrap">
                                <img className="u-img-fluid" src={item.thumbnail} alt="" />
                            </div>
                            <div className="table-p__info">
                                <span className="table-p__name">
                                    <a href="product-detail.html">{item.name}</a>
                                </span>
                                <span className="table-p__category">
                                    <a href="shop-side-version-2.html">{item.category_id.name}</a>
                                </span>
                                <ul className="table-p__variant-list">
                                    <li>
                                        <span>Size: 22</span>
                                    </li>
                                    <li>
                                        <span>Color: Red</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span className="table-p__price">${item.price}</span>
                    </td>
                    <td>
                        <div className="table-p__input-counter-wrap">
                            {/*====== Input Counter ======*/}
                            <div className="input-counter">
                                <span className="input-counter__minus fas fa-minus" onClick={() => {
                                    if (item.quantity > 1) {
                                        updateItemQuantity(item.id, item.quantity - 1);
                                    }
                                }}></span>
                                <input className="input-counter__text input-counter--text-primary-style" type="text" value={item.quantity} data-min="1" data-max="1000" />
                                <span className="input-counter__plus fas fa-plus" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}></span>
                            </div>
                            {/*====== End - Input Counter ======*/}
                        </div>
                    </td>
                    <td>
                        <div className="table-p__del-wrap">
                            <a className="far fa-trash-alt table-p__delete-link" onClick={() => removeItem(item.id)}></a>
                        </div>
                    </td>
                </tr>
            ))}
        </>
    )
}

export default CartItem
