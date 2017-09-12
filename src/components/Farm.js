import React, { Component } from 'react';
import "./style.css"
class farm extends Component {
    render() {
        return (
            <div className=" contenedor contenedor_farmacenter" >
              <div  className="Medicamento">
                  <div className="img">
                    <img src="http://diariodominicano.com/imagenes/6/medicamentos19.jpg" alt=""/>
                  </div>
                <div className="info_farmacenter">
                  <div className="info">
                    <h3>
                      pildoras
                    </h3>
                    <p>
                      S/ 40.00
                    </p>
                  </div>
                  <div className="info info_color">
                    <h3>
                      Mas informacion
                    </h3>
                    <p>
                      consultas
                    </p>
                  </div>
                </div>
              </div>
              <div  className="Pastillas">
                  <div className="img">
                    <img src="http://www.galenox.com/images/farmacos/imgmeds/18350.jpg" alt=""/>
                  </div>
                <div className="info_farmacenter">
                  <div className="info">
                    <h3>
                    Pastillas
                    </h3>
                    <p>
                      S/ 20.00
                    </p>
                  </div>
                  <div className="info info_color">
                    <h3>
                      Mas informacion
                    </h3>
                    <p>
                    consultas
                    </p>
                  </div>
                </div>
              </div>
              <div  className="farmacenter">
                  <div className="img">
                    <img src="./images/farm.jpg" alt=""/>
                  </div>
                <div className="info_farmacenter">
                  <div className="info">
                    <h3>
                      Capsulas
                    </h3>
                    <p>
                      S/ 100.00
                    </p>
                  </div>
                  <div className="info info_color">
                    <h3>
                      Mas informacion
                    </h3>
                    <p>
                      consultas
                    </p>
                  </div>
                </div>
              </div>
              <div  className="farmacenter">
                  <div className="img">
                    <img src="./images/lanch.jpg" alt=""/>
                  </div>
                <div className="info_rooms">
                  <div className="info">
                    <h3>
                      analgesicos
                    </h3>
                    <p>
                      S/ 9.00
                    </p>
                  </div>
                  <div className="info info_color">
                    <h3>
                      Mas informacion
                    </h3>
                    <p>
                      consultas
                    </p>
                  </div>
                </div>
              </div>
              <div  className="farmacenter">
                  <div className="img">
                    <img src="http://www.michaellissek.com/grafiken/tamiflu.jpg.jpg" alt=""/>
                  </div>
                <div className="info_farmacenter">
                  <div className="info">
                    <h3>
                      bactericidas
                    </h3>
                    <p>
                      S/ 80.00
                    </p>
                  </div>
                  <div className="info info_color">
                    <h3>
                      Mas informacion
                    </h3>
                    <p>
                      consultas
                    </p>
                  </div>
                </div>
              </div>
              <div  className="farmacenter">
                  <div className="img">
                    <img src="./images/lanch.jpg" alt=""/>
                  </div>
                <div className="info_cosmeticos">
                  <div className="info">
                    <h3>
                      cosmeticos
                    </h3>
                    <p>
                      S/ 20.00
                    </p>
                  </div>
                  <div className="info info_color">
                    <h3>
                      Mas informacion
                    </h3>
                    <p>
                      consultas
                    </p>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default farm;
