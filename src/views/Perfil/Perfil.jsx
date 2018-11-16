import React from "react";
import { Card, CardHeader, CardBody, Row, Col ,Button} from "reactstrap";
import { PanelHeader, FormInputs } from "components";
import NotificationAlert from "react-notification-alert";

class Signin extends React.Component {

  constructor(props){
    super(props);
    this.id = props.id;
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
    this.goBack =  this.goBack.bind(this);
    this.notify = this.notify.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url = 'https://mulheresdigitais.herokuapp.com/users';
  }
  
  goBack(){
    this.props.history.goBack();
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
  
  //GET
  componentDidMount(){
    var user = JSON.parse(window.sessionStorage.getItem('user'));
    this.id = Number(user.id);
    if (this.id > Number(0)){
      fetch(this.url+'/'+this.id)
      .then(res => res.json())
      .then(json => {
        this.setState(json);
      });
    }
  }
  
  //POST
  handleSubmit(event) {
    event.preventDefault();
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
      //console.log("Result: ", result);
    });
  }

  render() {
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
                            maxLength: "45",
                            required: true
                          }
                        },
                        {
                          label: "Senha",
                          inputProps: {
                            name: "pwd",
                            type: "password",
                            defaultValue: "",
                            placeholder: "Senha",
                            onChange: this.handleInputChange,
                            maxLength: "45",
                            required: true
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
                            onChange: this.handleInputChange,
                            maxLength: "144",
                            required: true
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
                            onChange: this.handleInputChange,
                            maxLength: "45",
                            required: true
                          }
                        },
                        {
                          label: "Último Nome",
                          inputProps: {
                            name: "lastname",
                            type: "text",
                            defaultValue: this.state.lastname,
                            placeholder: "Último Nome",
                            onChange: this.handleInputChange,
                            maxLength: "45",
                            required: true
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
                            onChange: this.handleInputChange,
                            maxLength: "100",
                            required: true
                          }
                        },
                        {
                          label: "País",
                          inputProps: {
                            name: "country",
                            type: "text",
                            defaultValue: this.state.country,
                            placeholder: "País",
                            onChange: this.handleInputChange,
                            maxLength: "45",
                            required: true
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
                            name: "userdescription",
                            type: "textarea",
                            rows: "6",
                            cols: "80",
                            value: this.state.userdescription,
                            placeholder: "Descrição do perfil",
                            onChange: this.handleInputChange,
                            maxLength: "255",
                            required: true
                          }
                        }
                      ]}
                    />
                    <Button type="submit" color="info">Salvar</Button>
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
export default Signin;