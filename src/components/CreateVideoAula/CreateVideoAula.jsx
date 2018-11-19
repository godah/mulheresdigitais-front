import React from "react";
import { Card, CardHeader, CardBody, Row, Col ,Button} from "reactstrap";
import { FormInputs } from "components";
import NotificationAlert from "react-notification-alert";

class CreateVideoAula extends React.Component {

  constructor(props){
    super(props);
    this.user = JSON.parse(window.sessionStorage.getItem('user'));
    this.state = {
      title: "",
      lessondescription:"",
      video: "",
      userKnowledge: {id: 31}
    };
    this.goBack =  this.goBack.bind(this);
    this.notify = this.notify.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url = 'https://mulheresdigitais.herokuapp.com/lessons';
  }
  
  goBack(){
    window.location.reload();
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
    console.log(this.url);
    console.log(JSON.stringify(this.state));
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
      console.log("Response.status", response.status)
      if(response.status === Number(200)){
        this.notify("success", "Salvo com sucesso!");
        window.location.reload();
      }else{
        this.notify("danger", "Falha na gravacao!");
      }
    })
    .then(result => {
      //console.log("Result: ", result);
    });
  }

  render() {
    return (
      <div>                  
        <div className="content">
          <Row className="singinCard">
            <Col md={12} xs={12}>
              <Card className="Timeline">
                <CardHeader>
                  <NotificationAlert ref="notificationAlert" />
                  <h5 className="title">Publicar Video-Aula</h5>
                </CardHeader>
                <CardBody>
                  <form onSubmit={this.handleSubmit}>
                    <FormInputs
                    ncols={["col-md-12"]}                      
                      proprieties={[
                        {
                          label: "Titulo",
                          inputProps: {
                            name: "title",
                            type: "text",
                            defaultValue: this.state.title,
                            placeholder: "Titulo",
                            onChange: this.handleInputChange,
                            maxLength: "64",
                            required: true
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Descricao",
                          inputProps: {
                            name: "lessondescription",
                            type: "textarea",
                            rows: "6",
                            cols: "80",
                            value: this.state.lessondescription,
                            placeholder: "Descricao",
                            onChange: this.handleInputChange,
                            maxLength: "255",
                            required: true
                          }
                        }
                      ]}
                      />
                    <FormInputs
                    ncols={["col-md-12"]}                      
                      proprieties={[
                        {
                          label: "Link do Video",
                          inputProps: {
                            name: "video",
                            type: "text",
                            defaultValue: this.state.video,
                            placeholder: "Link do Video",
                            onChange: this.handleInputChange,
                            maxLength: "255",
                            required: true
                          }
                        }
                      ]}
                    />
                    <Button type="submit" color="info">Publicar</Button>
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

export default CreateVideoAula;
