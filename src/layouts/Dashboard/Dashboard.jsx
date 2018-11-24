import React from "react";
// javascript plugin used to create scrollbars on windows
//import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";

import { Header, Footer, Sidebar, Button } from "components";

import dashboardRoutes from "routes/dashboard.jsx";
import Login from "../../components/Login/Login";
import Singin from "../../components/Singin/Singin";

//var ps;

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newUser: false
    };
    this.singin = this.singin.bind(this);
  }

  componentDidMount() {
    /*
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    */
  }
  componentWillUnmount() {
    /*
    if (navigator.platform.indexOf("Win") > -1 && ps) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    */
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.refs.mainPanel.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }

  singin(){
    console.log('singin()');
    this.setState({newUser: true});
  }
  
  render() {
    //localStorage.setItem('1', JSON.stringify({id: '1', name: 'Nome'}));
    //localStorage.setItem('1',false);
    const userLoged = JSON.parse(window.sessionStorage.getItem('user'));
    if (!userLoged){
      if(!this.state.newUser){
        return (
          <div>
            <Login/>
            <div className="centerOut">
                <br/>
                <Button onClick={this.singin} color="info">Cadastrar</Button>              
            </div>
          </div>
        );
      }else{
        return (
          <div>
            <Singin/>
          </div>
        );
      }
    }else{
      //console.log('Usuario logado: '+userLoged.name);
      return (
        <div className="wrapper">
          <Sidebar {...this.props} routes={dashboardRoutes} />
          <div className="main-panel" ref="mainPanel">
            <Header {...this.props} />
            <Switch>
              {dashboardRoutes.map((prop, key) => {
                if (prop.collapse) {
                  return prop.views.map((prop2, key2) => {
                    return (
                      <Route
                        path={prop2.path}
                        component={prop2.component}
                        key={key2}
                      />
                    );
                  });
                }
                if (prop.redirect)
                  return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
                return (
                  <Route path={prop.path} component={prop.component} key={key} />
                );
              })}
            </Switch>
            <Footer fluid />
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
