import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle
} from "reactstrap";
import { CardCategory } from "components";
class Post extends React.Component {
  render() {
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

            <p className="font-weight-light text-right">{this.props.dateformated}</p>
                                
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Post;
