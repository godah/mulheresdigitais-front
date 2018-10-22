import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "components";

import userBackground from "assets/img/bg11.jpg";
import userAvatar from "assets/img/default-avatar.png";
class Signin extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      user: {
        login: "mikeadrew23",
        name: "Mike",
        lastName: "Andrew",
        email: "andrew@gmail.com",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "Bucharest",
        country: "Brasil",
        postalcode: "31360363",
        description: "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
      },
      isLoaded: false,
    }
  }

  render() {
    
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Cadastro</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormInputs
                    ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}                      
                      proprieties={[
                        {
                          label: "Login",
                          inputProps: {
                            type: "text",
                            defaultValue: this.state.user.login,
                            placeholder: "Login"
                          }
                        },
                        {
                          label: "Email",
                          inputProps: {
                            type: "email",
                            defaultValue: this.state.user.email,
                            placeholder: "Email"
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
                            type: "text",
                            placeholder: this.state.user.name,
                            defaultValue: "Mike"
                          }
                        },
                        {
                          label: "Último Nome",
                          inputProps: {
                            type: "text",
                            defaultValue: this.state.user.lastName,
                            placeholder: "Último Nome"
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Endereço",
                          inputProps: {
                            type: "text",
                            defaultValue: this.state.user.address,
                            placeholder: "Endereço"
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={[
                        "col-md-4 pr-1",
                        "col-md-4 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "Cidade",
                          inputProps: {
                            type: "text",
                            defaultValue: this.state.user.city,
                            placeholder: "Cidade"
                          }
                        },
                        {
                          label: "País",
                          inputProps: {
                            type: "text",
                            defaultValue: this.state.user.country,
                            placeholder: "País"
                          }
                        },
                        {
                          label: "Código Postal",
                          inputProps: {
                            type: this.state.user.postalcode,
                            placeholder: "Código Postal"
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
                            type: "textarea",
                            rows: "4",
                            cols: "80",
                            defaultValue: this.state.user.description,
                            placeholder: "Descrição do perfil"
                          }
                        }
                      ]}
                    />
                  </form>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} xs={12}>
              <Card className="card-user">
                <div className="image">
                  <img src={userBackground} alt="..." />
                </div>
                <CardBody>
                  <CardAuthor
                    avatar={userAvatar}
                    avatarAlt="..."
                    title= {this.state.user.name+' '+this.state.user.lastName}
                    description= {this.state.user.login}
                  />
                  <p className="description text-center">
                    {this.state.user.description}
                  </p>
                </CardBody>
                <hr />
                <CardSocials
                  size="lg"
                  socials={[
                    {
                      icon: "fab fa-facebook-f",
                      href: "https://www.facebook.com/"
                    },
                    {
                      icon: "fab fa-twitter",
                      href: "https://www.facebook.com/"
                    },
                    {
                      icon: "fab fa-google-plus-g",
                      href: "https://plus.google.com/discover"
                    }
                  ]}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Signin;