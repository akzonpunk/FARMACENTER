import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <div className="footer_seccion">
              <h3>FARMACENTER</h3>
              <p>la vida te sonrie a cada dia con un buen cuidado</p>
            </div>
            <div className="footer_seccion">
              <h3></h3>
              <p>la florida</p>
              <p>PHONE:000032455</p>
              <p>E-mail: FARMACENTER.gmail.com</p>
              <a id="title" href="#" class="title title-bg title-font style-text-shadow">	
         	<span id="mini-menu" class="animate" title="Opciones"><span class="icon-menu">
        </span></span>		<span id="close-chat" class="title-button" data-title="Cerrar el chat">
            <span class="icon-close"></span></span>		<span id="minimize" class="title-button" data-title="Minimizar ventana">
                <span class="icon-minimize"></span></span>		<span id="title-text">Chat Farmacéutico</span>	</a>
                
            </div>

        </div>
            
        );
    }
}

export default Footer;