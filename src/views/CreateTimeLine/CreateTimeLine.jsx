import React from "react";
import { Row, Col } from "reactstrap";
import { PanelHeader } from "../../components";
import CreateTimeline from "../../components/CreateTimeLine/CreateTimeLine";
import Post from "../../components/Post/Post";

class CreateTimeLine extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      items: [],
      isLoaded: false
    }
    this.user = JSON.parse(window.sessionStorage.getItem('user'));
    this.url = 'https://mulheresdigitais.herokuapp.com/timelines';
  }

  //GET
  componentDidMount(){
    fetch(this.url+"/user/"+this.user.id)
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
            <CreateTimeline/>
            {items.map((item, key) => (
              <Col xs={12} md={12} key={key}>
                <Post user={item.user.firstname+' '+item.user.lastname} title={item.title}
                  text={item.text}
                  dateformated={item.date} id={item.id}/>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}
export default CreateTimeLine;