import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import Signin from "../views/Signin/Signin";
import Video from "../views/Video/Video";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "files_paper",
    component: Dashboard
  },
  {
    path: "/signin",
    name: "Cadastrar",
    icon: "arrows-1_share-66",
    component: Signin
  },
  {
    hidden: true,
    path: "/video",
    name: "Video",
    icon: "media-1_button-play",
    component: Video
  },
  { path: "/icons", name: "Icons", icon: "design_image", component: Icons },
  { path: "/maps", name: "Maps", icon: "location_map-big", component: Maps },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications
  },
  {
    path: "/user-page",
    name: "Perfil",
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/extended-tables",
    name: "Cursos",
    icon: "files_paper",
    component: TableList
  },
  {
    path: "/typography",
    name: "Videoconferência",
    icon: "design-2_ruler-pencil",
    component: Typography
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];

export default dashRoutes;