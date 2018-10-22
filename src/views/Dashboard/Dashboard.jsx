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
  }
  componentDidMount(){
      fetch('https://mulheresdigitais.herokuapp.com/demo/all')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });

      //carga para teste
      this.posts = [
        {
          user: 'Usuário1',
          title: 'title1',
          text: 'Text1 text1 text1 text1 text1 text1 text1 text1.',
          dateformated: '22/10/2018 13:53'
        },
        {
          user: 'Usuário2',
          title: 'title2',
          text: 'Text2 text2 text2 text2 text2 text2 text2 text2.',
          dateformated: '22/10/2018 13:53'
        },
        {
          user: 'Usuário3',
          title: 'title3',
          text: 'Text3 text3 text3 text3 text3 text3 text3 text3.',
          dateformated: '22/10/2018 13:53'
        },
        {
          user: 'Usuário4',
          title: 'title4',
          text: 'Text4 text4 text4 text4 text4 text4 text4 text4.',
          dateformated: '22/10/2018 13:53'
        },
    ]
  }
  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded){
      
      return <div>Loading...</div>;

    } else {

      return (

        <div>
          <div>
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>          
          <PanelHeader
            size="lg"
            content={
              <Logo title ="Título" subtitle="Subtítulo"/>
            }
            />
          <div className="content">
            <Row>

              {this.posts.map(item => (
                <Col xs={12} md={12}>
                <Post user={item.user} title={item.title}
                  text={item.text}
                  dateformated={item.dateformated}/>
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
