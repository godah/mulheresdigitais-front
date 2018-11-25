import React from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";
import { CardCategory } from "components";
import videoconference from "assets/img/video-call.jpeg";
class VideoConferencia extends React.Component {
  render() {
    var date = new Date();
    var dateString = date.toDateString() + " - " + date.toLocaleTimeString();
    return (
      <div className="video">   
        <Card className="videoCard ">
          <CardHeader className="videoContent ">
            <CardCategory>{this.props.user}</CardCategory>
            <CardTitle tag="h4" className="font-italic">{this.props.title}</CardTitle>
          </CardHeader>
          <CardBody className="videoContent ">
            <Row>
              <Col >
                <img src={videoconference} alt="" width="640" height="480"/>
                <br/><br/>
                <p>{this.props.descritption}</p>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <p className="font-weight-light text-right">{dateString}</p>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default VideoConferencia;
