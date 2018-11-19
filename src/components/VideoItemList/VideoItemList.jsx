import React from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button, Row, Col} from "reactstrap";
import { CardCategory } from "components";
class VideoItemList extends React.Component {


  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
    this.url = 'https://mulheresdigitais.herokuapp.com/lessons';
  }

  remove(){
    console.log(this.url+"/"+this.props.id);
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
    console.log(this.props.videolink.startsWith("https://www.youtube.com/watch?"));
    if (this.props.videolink.startsWith("https://www.youtube.com/watch?")){
      video = "https://www.youtube.com/embed/" +this.props.videolink.substring(32);
      console.log(video);
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
              <Col md={2} xs={2}>
                <iframe title={this.props.title} width="160" height="90" src={video}
                frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
              </Col>
              <Col md={10} xs={10}>
                <p>{this.props.description}</p>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <hr />
            <p className="font-weight-light text-right">{dateString}</p>
            <Button hidden={this.props.hidden} onClick={this.remove} color="danger">Remover</Button>  
          </CardFooter>
        </Card>
       
      </div>
    );
  }
}

export default VideoItemList;
