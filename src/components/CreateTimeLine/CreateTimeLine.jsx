import React from "react";
import { Card, CardHeader, CardBody, Row, Col ,Button} from "reactstrap";
import { FormInputs } from "components";
import NotificationAlert from "react-notification-alert";

class CreateTimeline extends React.Component {

  constructor(props){
    super(props);
    this.user = JSON.parse(window.sessionStorage.getItem('user'));
    this.state = {
      text:"",
      title: "",
      date: "",
      image: {id: 1},
      user: {id: this.user.id}
    };
    this.goBack =  this.goBack.bind(this);
    this.notify = this.notify.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url = 'https://mulheresdigitais.herokuapp.com/timelines';
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
      //console.log("Response.status", response.status)
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
                  <h5 className="title">Publicar Linha do Tempo</h5>
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
                            maxLength: "100",
                            required: true
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Texto",
                          inputProps: {
                            name: "text",
                            type: "textarea",
                            rows: "6",
                            cols: "80",
                            value: this.state.text,
                            placeholder: "Texto",
                            onChange: this.handleInputChange,
                            maxLength: "1000",
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

export default CreateTimeline;
