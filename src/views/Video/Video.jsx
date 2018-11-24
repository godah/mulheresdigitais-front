import React from "react";
import { Row  } from "reactstrap";
import { PanelHeader } from "../../components";
import VideoComp from "../../components/Video/Video";

class Video extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      id: "",
      title: "",
      lessondescription: "",
      video: "",
      date: "",
      userKnowledge: ""
    };
    var href = window.location.href;
    if(href.startsWith('https://mulheres-digitais-front.herokuapp.com/video/')){
      this.videoId = href.substring(52);
    }else{
      this.videoId = href.substring(28);
    }
    this.url = 'https://mulheresdigitais.herokuapp.com/lessons';
  }
  
  //GET
  componentDidMount(){
    this.id = Number(this.videoId);
    if (this.id > Number(0)){
      fetch(this.url+'/'+this.id)
      .then(res => res.json())
      .then(json => {
        this.setState(json);
      });
    }
  }
  
  
  render() {
    console.log(this.videoId);
    
    return (

      <div>
        <PanelHeader size="sm"/>
        <div className="content">

          <Row>
            <div>

              <VideoComp id={this.state.id} title={this.state.title} dateformated={this.state.date}
                  videolink={this.state.video} description={this.state.lessondescription}/>

            </div>
          </Row>

        </div>
        
      </div>
    );
  }
}
export default Video;