import React from "react";
class Video extends React.Component {
  render() {
    return (
      <div className="video">   

        <Row>
          <div>
            <Col xs={8} md={12}>
              <iframe id="ytplayer" type="text/html" width="640" height="360"
                src= {this.props.url}
                frameborder="0"/>
            </Col>

            <Col xs={8} md={12}>
              <h1 className="text-light text-center font-romantic logo-mulheresdigitais">{this.props.title}</h1>
              <p className="font-italic text-light text-center font-weight-light">{this.props.description}</p>
            </Col>
          </div>
        </Row>

      </div>
    );
  }
}

export default Video;
