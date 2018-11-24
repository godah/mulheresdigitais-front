import React from "react";
import { Row, Col} from "reactstrap";
import { PanelHeader } from "../../components";

class Vagas extends React.Component {

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
          <Row>
            <Col>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Vagas;