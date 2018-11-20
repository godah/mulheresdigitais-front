import React from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button, Row, Col } from "reactstrap";
import { CardCategory } from "components";
import { Link }from "react-router-dom";
class VideoItemList extends React.Component {


  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
    this.url = 'https://mulheresdigitais.herokuapp.com/lessons';
  }

  remove(){
    //console.log(this.url+"/"+this.props.id);
    fetch(this.url+"/"+this.props.id, {method: 'DELETE'})
    .then(response => {
      window.location.reload();
      this.notify("success", "Removido com sucesso!");
    })
    .then(result => {
      this.notify("danger", "Falha na remocao!");
    });
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
              </Col>
              <Col md={8} xs={8}>
                <p>{this.props.description}</p>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <p className="font-weight-light text-right">{dateString}</p>
            <Row>
              <Col md={2} xs={2}>
                <Link to={`/video/${this.props.id}`}>
                  <Button color="info">Visualizar</Button>  
                </Link>
              </Col>
              <Col md={2} xs={2}>
                <Button hidden={this.props.hidden} onClick={this.remove} color="danger">Remover</Button>  
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default VideoItemList;
