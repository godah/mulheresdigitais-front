import React from "react";
import { Row } from "reactstrap";
import { PanelHeader } from "../../components";
import VagasItemList from "../../components/VagasItemList/VagasItemList";

class Vagas extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      items: [],
      isLoaded: false
    }
    this.url = 'https://mulheresdigitais.herokuapp.com/lessons';
  }

  render() {
    return (   
      <div>
        <PanelHeader size="sm"/>
        <div className="content">
          <Row>
            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Superior completo em análise e desenvolvimento de sistemas ou 
              tecnologia da informação, preferencialmente com pós-graduação em 
              sistemas de informação ..."
            />
        
            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Profissionais com experiência em:<br/>
              - Lógica de programação, algorítimo.<br/>
              - Conhecimentos avançados em: Sql, mongodb, javascript, jquery, angularjs, ..."
            />

            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Para conceituada empresa de ti de blumenau/sc. Atividades: 
              - Identificar, analisar e modelar as informações necessárias 
              para o desenvolvimento de sistemas (novos e/ou alteração)."
            />
        
          </Row>
          <Row>
            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Superior completo em análise e desenvolvimento de sistemas ou 
              tecnologia da informação, preferencialmente com pós-graduação em 
              sistemas de informação ..."
            />
        
            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Profissionais com experiência em:<br/>
              - Lógica de programação, algorítimo.<br/>
              - Conhecimentos avançados em: Sql, mongodb, javascript, jquery, angularjs, ..."
            />

            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Para conceituada empresa de ti de blumenau/sc. Atividades: 
              - Identificar, analisar e modelar as informações necessárias 
              para o desenvolvimento de sistemas (novos e/ou alteração)."
            />
        
          </Row>
          <Row>
            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Superior completo em análise e desenvolvimento de sistemas ou 
              tecnologia da informação, preferencialmente com pós-graduação em 
              sistemas de informação ..."
            />
        
            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Profissionais com experiência em:<br/>
              - Lógica de programação, algorítimo.<br/>
              - Conhecimentos avançados em: Sql, mongodb, javascript, jquery, angularjs, ..."
            />

            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Para conceituada empresa de ti de blumenau/sc. Atividades: 
              - Identificar, analisar e modelar as informações necessárias 
              para o desenvolvimento de sistemas (novos e/ou alteração)."
            />
        
          </Row>
          <Row>
            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Superior completo em análise e desenvolvimento de sistemas ou 
              tecnologia da informação, preferencialmente com pós-graduação em 
              sistemas de informação ..."
            />
        
            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Profissionais com experiência em:<br/>
              - Lógica de programação, algorítimo.<br/>
              - Conhecimentos avançados em: Sql, mongodb, javascript, jquery, angularjs, ..."
            />

            <VagasItemList 
              title="Vaga de Analista de Desenvolvimento de Sistemas" 
              subtitle="Empresa disponível apenas para cadastrados." 
              description="
              Para conceituada empresa de ti de blumenau/sc. Atividades: 
              - Identificar, analisar e modelar as informações necessárias 
              para o desenvolvimento de sistemas (novos e/ou alteração)."
            />
        
          </Row>
        </div>
      </div>
    );
  }
}
export default Vagas;