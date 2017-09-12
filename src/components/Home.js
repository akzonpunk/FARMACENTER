import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
import './style.css';
class Home extends Component {

    render() {
        return (
          <div className="imgbackground portada" >
            <div className="formulario">
              <input className="form" type="date"  name="bday" min="2000-01-02" >
              </input>
              <input className="form" type="date"  name="bday" min="2000-01-02">
              </input>

              <select className="form">
                <option value="Habitacion">Habitacion</option>
                <option value="Individual">Individual</option>
                <option value="Matrimonial">Matrimonial</option>
                <option value="Triple">Triple</option>
              </select>
              <NavLink exact to="/rooms"  activeClassName="selected"><input className="form btn"  type="submit" name="" value="Reservar"/></NavLink>

            </div>
            <div className="text">
              <h1>Te ayudamos a que pases una noche increible en nuestras fabulosas habitaciones</h1>
            </div>


          </div>

        );
    }
}

export default Home;
