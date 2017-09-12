import React, { Component } from 'react';
import {Switch,Route,Link,NavLink} from 'react-router-dom'
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
                <option value="Habitacion">Analgesicos</option>
                <option value="Individual">inyectables</option>
                <option value="Matrimonial">Bactericidas</option>
                <option value="Matrimonial">Antibioticos</option>
                <option value="Matrimonial">Dermatologia</option>
                <option value="Matrimonial">Higiene</option>
                <option value="Matrimonial">Perfumes</option>
                <option value="Triple">Cosmeticos</option>
              </select>
              <NavLink exact to="/rooms"  activeClassName="selected"><input className="form btn"  type="submit" name="" value="Reservar"/></NavLink>

            </div>
            <div className="text">
              <h1>LA SALUD ES NUESTRA RESPONSABILIDAD DEL CUIDADO DE TU BIENESTAR</h1>
            </div>
            <div className="text">
              <h1>LA GRANDESA ESTA EN EL PODER DE DIOS Y EL ES VIDA</h1>
            </div>

          </div>

        );
    }
}

export default Home;
