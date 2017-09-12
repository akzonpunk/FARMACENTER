import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="imgbackground portada">
              <div className="OnLine">
                <h2>Sugerencias</h2>
                  <input className="form2" type="text"  placeholder="Nombre"></input>
                  <input className="form2" type="text"  placeholder="Apellido"></input>
                  <input className="form2" type="number"  placeholder="DNI"></input>
                  <input className="form2" type="number"  placeholder="Codigo"></input>
                  <input className="form2" type="email" placeholder="E-mail"></input>
                  <input className="form2btn"  type="button" name="enviar" value="Enviar"/>
                  <input className="form2btn"  type="button" name="cancelar" value="Cancelar"/>
              </div>

            </div>
        );
    }
}

export default Form;
