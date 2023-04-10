import React from "react";

const HeaderOfCart = (props) =>{
    return(
        <header className="Header-part-main">
            <nav className="Nav-part">
                <ul className="Nav-list-items">
                    <li className="Cart-Icons-With-Counting">
                       <span className="Cart-Counting" >
                            {props.count}
                        </span>
                        <div className="Nav-right-item">
                            <img
                            alt="cart"
                            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" 
                            className="action-icons-nav"
                            />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default HeaderOfCart;