import React from "react";
import { Card, CardBody, Col } from "reactstrap";
class VagasItemList extends React.Component {

  render() {
    return (   
      <Col md={4} xs={6}>
        <Card>
          <div className="vagasTitleBg cardVagas">
            <div className="text-center vagasTitle">{this.props.title}</div>
            <div className="text-center vagasSubTitle">{this.props.subtitle}</div>
            <hr/>
          </div>
          <CardBody>
            <div className="description text-center vagasDescription ">
              {this.props.description}
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default VagasItemList;
