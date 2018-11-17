import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import Perfil from "../views/Perfil/Perfil";
import Video from "../views/Video/Video";
import CreateTimeLine from "../views/CreateTimeLine/CreateTimeLine";
import CreateLesson from "../views/CreateLesson/CreateLesson";
import VideoConference from "../views/VideoConference/VideoConference";
import Search from "../views/Search/Search";
import Vagas from "../views/Vagas/Vagas";
import FaleConosco from "../views/FaleConosco/FaleConosco";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "files_paper",
    component: Dashboard
  },
  {
    path: "/perfil",
    name: "Perfil",
    icon: "users_single-02",
    component: Perfil
  },
  {
    path: "/search",
    name: "Pesquisar",
    icon: "ui-1_zoom-bold",
    component: Search
  },
  {
    path: "/createtimeline",
    name: "Minha linha do tempo",
    icon: "design_bullet-list-67",
    component: CreateTimeLine
  },
  {
    hidden: true,
    path: "/video",
    name: "Video",
    icon: "media-1_button-play",
    component: Video
  },
  {
    path: "/createlesson",
    name: "Minhas Video-Aulas",
    icon: "media-1_button-play",
    component: CreateLesson
  },
  {
    path: "/videoconference",
    name: "Coaching Video-conferencia",
    icon: "education_hat",
    component: VideoConference
  },
  { 
    hidden: true,
    path: "/icons", 
    name: "Icons", 
    icon: "design_image", 
    component: Icons },
  { 
    hidden: true,
    path: "/maps", 
    name: "Maps", 
    icon: "location_map-big", 
    component: Maps },
  {
    hidden:true,
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications
  },
  {
    hidden:true,
    path: "/user-page",
    name: "UserPage",
    icon: "users_single-02",
    component: UserPage
  },
  {
    hidden: true,
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList
  },
  {
    hidden: true,
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography
  },
  {
    path: "/vagas",
    name: "Vagas",
    icon: "education_paper",
    component: Vagas
  },
  {
    path: "/faleconosco",
    name: "Fale Conosco",
    icon: "ui-1_email-85",
    component: FaleConosco
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];

export default dashRoutes;