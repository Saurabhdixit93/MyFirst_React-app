import React from "react";

class FooterOfCart extends React.Component{
    render(){
        return(
            <footer className="Footer-Cart">
                <div className="Main-footer">
                    <ul className="List-for-footer">
                        <li className="Footer-list">
                            <img 
                               alt="footer"
                               src="https://cdn-icons-png.flaticon.com/512/552/552489.png"
                               className="Footer-icons"
                            />
                        </li>
                    </ul>
                </div>
            </footer>

        );
    }
}

export default FooterOfCart;