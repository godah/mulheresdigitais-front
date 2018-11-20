import React from "react";
import { Row, Col } from "reactstrap";
import { PanelHeader} from "../../components";
import CreateVideoAula from "../../components/CreateVideoAula/CreateVideoAula";
import VideoItemList from "../../components/VideoItemList/VideoItemList";

class CreateLesson extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      items: [],
      isLoaded: false
    }
    this.user = JSON.parse(window.sessionStorage.getItem('user'));
    this.url = 'https://mulheresdigitais.herokuapp.com/lessons';
  }

  //GET
  componentDidMount(){
    fetch(this.url)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json
      })
    });
  }

  render() {
    var { items } = this.state;
    return (   
      <div>
        <PanelHeader size="sm"/>
        <div className="content">
          <Row>
            <CreateVideoAula/>
            {items.map((item, key) => (
              <Col xs={12} md={12} key={key}>
                <VideoItemList title={item.title} description={item.lessondescription} 
                  videolink={item.video} dateformated={item.date} id={item.id}/>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}
export default CreateLesson;