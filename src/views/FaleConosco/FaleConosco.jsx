import React from "react";
import { Row, Col } from "reactstrap";
import { PanelHeader } from "../../components";
import logo from "assets/img/favicon-md.png";

class FaleConosco extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      items: [],
      isLoaded: false
    }
    this.url = 'https://mulheresdigitais.herokuapp.com/lessons';
  }

  render() {
    
    return (   
      <div>
        <PanelHeader size="sm"/>
        <div className="content">
          <br/><br/><br/><br/>
          <div className="centerOut">
            <Row>
              <Col md={12} xs={12} className="col-md-6 centerIn">              
                <img src={logo} alt="" width="128" height="128"/>
              </Col>
              <Col md={12} xs={12} className="col-md-6 centerIn">
              <br/><br/>
                <h3>Contato</h3>
                <p>E-mail: mulheresdigitais@gmail.com</p>
                <p>Telefone <i className="fa fa-whatsapp"/>: (31) 99999-8888</p>
                <a href="/faleconosco">
                  <i className="fa fa-facebook social"/>
                </a>
                <a href="/faleconosco">
                  <i className="fa fa-google-plus social"/>
                </a>
                <a href="/faleconosco">
                  <i className="fa fa fa-linkedin social"/>
                </a>
                <a href="/faleconosco">
                  <i className="fa fa-twitter social"/>
                </a>
                <a href="/faleconosco">
                  <i className="fa fa-youtube social"/>
                </a>
                <a href="/faleconosco">
                  <i className="fa fa-vimeo social"/>
                </a>
                <a href="/faleconosco">
                  <i className="fa  fa-stack-overflow social"/>
                </a>
                <a href="/faleconosco">
                  <i className="fa fa-pinterest-p social"/>
                </a>
                <a href="/faleconosco">
                  <i className="fa fa-github social"/>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
export default FaleConosco;