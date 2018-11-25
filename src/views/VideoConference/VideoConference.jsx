import React from "react";
import { Row } from "reactstrap";
import { PanelHeader } from "../../components";
import VideoConferencia from "../../components/VideoConferencia/VideoConferencia";

class VideoConference extends React.Component {

  render() {
    return (   
      <div>
        <PanelHeader size="sm"/>
        <div className="content">
          <Row>
            <div>
              <VideoConferencia user="Ermelinda" title="WebDesign" 
                descritption="Profissional com mais de 20 anos de experiência 
                  em agências de propaganda, design e web, e a cada dia buscando 
                  novas tendências e ampliando conhecimentos. Designer pleno, rápido, 
                  criativo e full time com domínio em diversos softwares: Corel Draw 
                  e Pacote Adobe."/>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}
export default VideoConference;