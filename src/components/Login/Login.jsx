import React from "react";
import { Button, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { FormInputs } from "components";
import NotificationAlert from "react-notification-alert";
class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:"",
      pwd:"",
      email:"",
      firstname:"",
      lastname:"",
      city:"",
      country:"",
      userdescription:"",
      userType: {id: 1},
      image: {id: 1}
    };
    this.notify = this.notify.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url = 'https://mulheresdigitais.herokuapp.com/users';
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  notify(type, message) {
    var options = {};
    options = {
      place: "tc",
      message: (
        <div>
          <div>
            {message}
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  }
  
  //POST
  handleSubmit(event) {
    event.preventDefault();
    //console.log(this.url);
    //console.log(JSON.stringify(this.state));
    fetch(this.url + '/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
      .then(json => {
        //console.log(json);
        window.sessionStorage.setItem('user', JSON.stringify(json));
        window.location.reload();
      })
      .catch(result => {
        this.notify("danger", "Login e/ou senha incorreto(s).");
      });
  }

  render() {
    return (
      <div>        
          <div className="content">
          <Row className="loginCard">
            <Col md={12} xs={12}>
              <Card className="loginContent">
                <CardHeader >
                  <NotificationAlert ref="notificationAlert" />
                  <h5 className="title">Entrar</h5>
                </CardHeader>
                <CardBody >
                  <form onSubmit={this.handleSubmit}>
                    <FormInputs
                    ncols={["col-md-11 pr-1"]}                      
                      proprieties={[
                        {
                          label: "Login",
                          inputProps: {
                            name: "name",
                            type: "text",
                            defaultValue: "",
                            placeholder: "login",
                            onChange: this.handleInputChange
                          }
                        }
                      ]}
                    />
                    <FormInputs
                    ncols={["col-md-11 pr-1"]}                      
                      proprieties={[
                        {
                          label: "Senha",
                          inputProps: {
                            name: "pwd",
                            type: "password",
                            defaultValue: "",
                            placeholder: "senha",
                            onChange: this.handleInputChange
                          }
                        }
                      ]}
                    />
                    <Button type="submit" color="info">Enviar</Button>
                    <Button onClick={this.goBack} color="danger">Cancelar</Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;
