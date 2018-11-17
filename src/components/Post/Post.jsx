import React from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Button } from "reactstrap";
import { CardCategory } from "components";

class Post extends React.Component {

  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
    this.url = 'https://mulheresdigitais.herokuapp.com/timelines';
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

    return (
      <div className="post">        
        <Card className="Timeline">
          <CardHeader>
            <CardCategory>{this.props.user}</CardCategory>
            <CardTitle tag="h4" className="font-italic">{this.props.title}</CardTitle>
          </CardHeader>
          <CardBody>

            <p>{this.props.text}</p>

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

export default Post;
