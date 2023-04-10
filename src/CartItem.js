import React from "react";

const CartItem = (props) =>{
    const { title , price , qty ,img } = props.product;
    const {product , onDecreaseQuantity , onIncreaseQuantity ,onDeleteProduct} = props;
    return(
        // main cart
        <div className="Cart-Item">
            {/* left block with image  */}
            <div className="Left-block-elements">
                <img 
                    alt="product-img"
                    src={img}
                />
            </div>

            {/* right block with cart price and add quantity and delete with price  */}
            <div className="Right-block-elements" >
                <div> {title} </div>
                <div>Price: {price}rs</div>
                <div>Qty: {qty}</div>
                {/* actions with icon  */}
                <div className="Cart-items-actions">
                    {/* buttons for action */}
                    <img
                        alt="increase" 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" 
                        className="action-icons"
                        onClick={ () =>onIncreaseQuantity(product)}
                    />
                    <img 
                        alt="decrease" 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png" 
                        className="action-icons"
                        onClick={() =>onDecreaseQuantity(product)} 
                    />
                    <img 
                        alt="delete" 
                        src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png" 
                        className="action-icons" 
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );

}

// const Styles = {
//     Image: {
//         width: 110,
//         height: 110,
//     }
// }

export default CartItem;