import React from "react";
import { Button  } from "reactstrap";
import Link from "react-router-dom/Link";
class Logo extends React.Component {


  render() {
    return (
      <div className="logo">        
          <h1 className="text-light text-center font-romantic logo-mulheresdigitais">{this.props.title}</h1>
          <p className="font-italic text-light text-center font-weight-light">{this.props.subtitle}</p>
          <Link to='/createtimeline'>
            <Button color="info">Criar post</Button>
          </Link>
      </div>
    );
  }
}

export default Logo;
