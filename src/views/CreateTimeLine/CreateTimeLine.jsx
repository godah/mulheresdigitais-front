import React from "react";
import { Row } from "reactstrap";
import { PanelHeader } from "../../components";

class CreateTimeLine extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      items: [],
      isLoaded: false
    }
    this.url = 'https://mulheresdigitais.herokuapp.com/timelines';
  }

  render() {
    return (   
      <div>
        <PanelHeader size="sm"/>
        <div className="content">
          <Row>
            
          </Row>
        </div>
      </div>
    );
  }
}
export default CreateTimeLine;