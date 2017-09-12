import React, { Component } from 'react'
// import './style.css';
import '../images/font-awesome/css/font-awesome.min.css';
import {Switch,Route,Link,NavLink} from 'react-router-dom';

class Header extends Component {
	render
	
	()
	 {
        return (
            <nav className="main">
            <div className="imgfarm">
            </div>
            <ul>
                <li><NavLink exact to="/" activeClassName="selected">Farmacenter</NavLink></li>
                <li><NavLink exact to="product" activeClassName="selected">Ofertas</NavLink></li>
                <li><NavLink exact to="photos" activeClassName="selected">Productos</NavLink></li>
                <li><NavLink exact to="photos" activeClassName="selected">Vender</NavLink></li>
                <li><NavLink exact to="photos" activeClassName="selected">Proveedores</NavLink></li>
                <li><NavLink exact to="photos" activeClassName="selected">Almacen</NavLink></li>
                <li><NavLink exact to="photos" activeClassName="selected">Compras</NavLink></li>
                <li><NavLink exact to="photos" activeClassName="selected">Carrito</NavLink></li>
                <li><NavLink exact to="photos" activeClassName="selected">Ayuda</NavLink></li>
            </ul>
            <span>
              <i className="fa fa-bars fa-2x " aria-hidden="true"></i>
            </span>
        </nav>
        );
    }
}

export default Header;

