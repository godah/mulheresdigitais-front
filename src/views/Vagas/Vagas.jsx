import React from "react";
import { Row } from "reactstrap";
import { PanelHeader } from "../../components";
import VagasItemList from "../../components/VagasItemList/VagasItemList";

class Vagas extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      items: [],
      isLoaded: false
    }
    this.url = 'https://mulheresdigitais.herokuapp.com/lessons';
  }

  render() {
    return (   
      <div>
        <PanelHeader size="sm"/>
        <div className="content">
          <Row>
            <VagasItemList title="Titulos" subtitle="Subtitulos" 
            description="To shorten the code, it is possible to specify 
            all the padding properties in one property."/>
        
            <VagasItemList />

            <VagasItemList />
        
          </Row>
          <Row>
            <VagasItemList title="Titulos" subtitle="Subtitulos" 
            description="To shorten the code, it is possible to specify 
            all the padding properties in one property."/>
        
            <VagasItemList />

            <VagasItemList />
          </Row>
          <Row>
            <VagasItemList title="Titulos" subtitle="Subtitulos" 
            description="To shorten the code, it is possible to specify 
            all the padding properties in one property."/>
        
            <VagasItemList />

            <VagasItemList />
          </Row>
        </div>
      </div>
    );
  }
}
export default Vagas;