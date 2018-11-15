import React from "react";
import { Card, CardHeader, CardBody, Row, Col ,Button} from "reactstrap";
import { PanelHeader, FormInputs } from "components";
import NotificationAlert from "react-notification-alert";

class Signin extends React.Component {

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
      description:"",
      userType: {id: 1},
      image: {id: 1}
    };
    this.isLoaded = false;
    this.response = {};
    this.error = {};
    this.notify = this.notify.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url = 'https://mulheresdigitais.herokuapp.com/users';
  }

  componentDidMount(){
    if (false){
      var id = "23";
      fetch('https://mulheresdigitais.herokuapp.com/users/'+id)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          user: json
        })
      });
    }
  }

  handleInputChange(event) {
    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
    
  }

  handleSubmit(event) {
    event.preventDefault();
    this.response = {};
    this.error = {};
    //console.log(this.url);
    //console.log(JSON.stringify(this.state));
    fetch(this.url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(response => {
      response.json()
      //console.log("Response.status", response.status)
      if(response.status === Number(200)){
        this.notify("success", "Salvo com sucesso!");
      }else{
        this.notify("danger", "Falha na gravacao! Verifique se o e-mail ja foi cadastrado.");
      }
    })
    .then(result => {
      this.result = result;
      console.log("Result: ", result);
    });
  }

  notify(type, message) {
    console.log("notify");
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

  render() {

    if(!this.isLoaded && false){
      return(
        <div>
          <PanelHeader size="sm" />
          <div className="content">
            <Row>
              <Col md={12} xs={12}>
                <Card>
                  <CardHeader>
                    <h5 className="title">Cadastro</h5>
                  </CardHeader>
                  <CardBody>
                  <div>Carregando...</div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      );              
    }else{
      return (
        <div>
          <PanelHeader size="sm" />
          <div className="content">
            <Row>
              <Col md={12} xs={12}>
                <Card>
                  <CardHeader>
                    <NotificationAlert ref="notificationAlert" />
                    <h5 className="title">Cadastro</h5>
                  </CardHeader>
                  <CardBody>
                    <form onSubmit={this.handleSubmit}>
                      <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}                      
                        proprieties={[
                          {
                            label: "Login",
                            inputProps: {
                              name: "name",
                              type: "text",
                              defaultValue: this.state.name,
                              placeholder: "Login",
                              onChange: this.handleInputChange,
                              required: true
                            }
                          },
                          {
                            label: "Senha",
                            inputProps: {
                              name: "pwd",
                              type: "password",
                              defaultValue: this.state.pwd,
                              placeholder: "Senha",
                              onChange: this.handleInputChange
                            }
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          {
                            label: "Email",
                            inputProps: {
                              name: "email",
                              type: "email",
                              defaultValue: this.state.email,
                              placeholder: "Email",
                              onChange: this.handleInputChange
                            }
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                        proprieties={[
                          {
                            label: "Primeiro Nome",
                            inputProps: {
                              name: "firstname",
                              type: "text",
                              defaultValue: this.state.firstname,
                              placeholder: "Primeiro Nome",
                              onChange: this.handleInputChange
                            }
                          },
                          {
                            label: "Último Nome",
                            inputProps: {
                              name: "lastname",
                              type: "text",
                              defaultValue: this.state.lastName,
                              placeholder: "Último Nome",
                              onChange: this.handleInputChange
                            }
                          }
                        ]}
                      />
                      <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                        proprieties={[
                          {
                            label: "Cidade",
                            inputProps: {
                              name: "city",
                              type: "text",
                              defaultValue: this.state.city,
                              placeholder: "Cidade",
                              onChange: this.handleInputChange
                            }
                          },
                          {
                            label: "País",
                            inputProps: {
                              name: "country",
                              type: "text",
                              defaultValue: this.state.country,
                              placeholder: "País",
                              onChange: this.handleInputChange
                            }
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          {
                            label: "Descrição do perfil",
                            inputProps: {
                              name: "description",
                              type: "textarea",
                              rows: "4",
                              cols: "80",
                              defaultValue: this.state.description,
                              placeholder: "Descrição do perfil",
                              onChange: this.handleInputChange
                            }
                          }
                        ]}
                      />
                      <Button type="submit" onClick={this.handleClick} color="info">Salvar</Button>
                      <Button onClick={() =>this.notify("danger","teste danger")} color="danger">Cancelar</Button>
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
}
export default Signin;