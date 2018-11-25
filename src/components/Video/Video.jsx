import React from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";
import { CardCategory } from "components";
class VideoComp extends React.Component {


  constructor(props){
    super(props);
    console.log(this.props.id);
  }
  
  render() {

    var date = new Date(this.props.dateformated);
    var dateString = date.toDateString() + " - " + date.toLocaleTimeString();
    var  video = "https://www.youtube.com/embed/" +this.props.videolink;
    
    return (
      <div className="video ">   
        <Card className="videoCard centerOut">
          <CardHeader className="videoContent ">
            <CardCategory>{this.props.user}</CardCategory>
            <CardTitle tag="h4" className="font-italic">{this.props.title}</CardTitle>
          </CardHeader>
          <CardBody className="videoContent centerIn">
            <Row>
              <Col className="centerOut">
                <iframe title={this.props.title} width="560" height="315" src={video}
                frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                <br/><br/>
                <p>{this.props.description}</p>
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

export default VideoComp;
