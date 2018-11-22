import React from "react";
import { Row, Col } from "reactstrap";
import VideoItemList from "../../components/VideoItemList/VideoItemList";
import { PanelHeader } from "../../components";

class Search extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      items: [],
      isLoaded: false
    }
    var href = window.location.href;
    
    this.keyWord = href.substring(63);
    
    this.url = 'https://mulheresdigitais.herokuapp.com/lessons';
  }

  componentDidMount(){
    //TODO filtro por usuario logado, falta usersknowledges
    fetch(this.url+"/pesquisar="+this.keyWord)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json
      });
    });
  }

  render() {
    var { items } = this.state;
    return (   
      <div>
        <PanelHeader size="sm"/>
        <div className="content">
          <Row>
            {items.map((item, key) => (
              <Col xs={12} md={12} key={key}>
                <VideoItemList title={item.title} description={item.lessondescription} 
                  videolink={item.video} dateformated={item.date} id={item.id} hidden={true}/>
              </Col>
            ))}          
          </Row>
        </div>
      </div>
    );
  }
}
export default Search;