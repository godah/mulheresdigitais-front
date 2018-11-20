import React from "react";
class Video extends React.Component {


  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
  }
  
  render() {
    var date = new Date(this.props.dateformated);
    var dateString = date.toDateString() + " - " + date.toLocaleTimeString();
    var video;
    if (this.props.videolink.startsWith("https://www.youtube.com/watch?")){
      video = "https://www.youtube.com/embed/" +this.props.videolink.substring(32);
    }else{
      video = "https://www.youtube.com/embed/hn9jzDvM9nk";
    }
    return (
      <div className="video">   
        <Card className="Timeline">
          <CardHeader>
            <CardCategory>{this.props.user}</CardCategory>
            <CardTitle tag="h4" className="font-italic">{this.props.title}</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={4} xs={4}>
                <iframe title={this.props.title} width="160" height="90" src={video}
                frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                <p>{this.props.description}</p>
              </Col>
              <Col md={8} xs={8}>
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

export default Video;
