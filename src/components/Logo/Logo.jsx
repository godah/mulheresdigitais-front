import React from "react";
class Logo extends React.Component {


  render() {
    return (
      <div className="logo">        
          <h1 className="text-light text-center font-romantic logo-mulheresdigitais">{this.props.title}</h1>
          <p className="font-italic text-light text-center font-weight-light">{this.props.subtitle}</p>
      </div>
    );
  }
}

export default Logo;
