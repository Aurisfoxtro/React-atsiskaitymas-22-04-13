import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

const Navigation = ()=>{
        return(
            <nav>
                <ul className ="nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/saved">Favorites</Link></li>
                </ul>
            </nav>
        )
    }

export default Navigation