import React from "react";
import { Row  } from "reactstrap";
import { PanelHeader } from "../../components";

class Video extends React.Component {

  constructor(props){
    super(props);
   
    //carga para teste
    this.video = [
      {
        user: 'Usuário1',
        title: 'title1',
        url: '',
        description: 'Text1 text1 text1 text1 text1 text1 text1 text1.',
        dateformated: '22/10/2018 13:53'
      }
    ]
  }

  componentDidMount(){ 
  }

  render() {
    return (

      <div>
        <PanelHeader size="sm"/>
        <div className="content">

          <Row>
            <div>

              

            </div>
          </Row>

        </div>
        
      </div>
    );
  }
}
export default Video;