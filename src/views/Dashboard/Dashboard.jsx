import React from "react";
import { Row, Col  } from "reactstrap";
import { Post, PanelHeader, Logo } from "../../components";

class Dashboard extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      items: [],
      isLoaded: false
    }
    this.url = 'https://mulheresdigitais.herokuapp.com/timelines';
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
    var { isLoaded, items } = this.state;
    if (!isLoaded){
      return (
        <div>
          <PanelHeader
            size="lg"
            content={
              <Logo title ="Mulheres Digitais" subtitle="O Poder Feminino no Mercado Digital"/>
            }
            />
          <div className="content">
            <Row>
              <div>Carregando...</div>
            </Row>
          </div>
        </div>
      );
    }else{
      return (
        <div>
          <PanelHeader
            size="lg"
            content={
              <Logo title ="Mulheres Digitais" subtitle="O Poder Feminino no Mercado Digital"/>
            }
            />
          <div className="content">
            <Row>
              {items.map(item => (
                <Col xs={12} md={12}>
                <Post user={item.user.firstname+' '+item.user.lastname} title={item.title}
                  text={item.text}
                  dateformated={item.date}/>
              </Col>
              ))}
            </Row>
          </div>
        </div>
      );
    }
  }
}
export default Dashboard;