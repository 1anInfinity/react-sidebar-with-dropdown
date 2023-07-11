import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/sidebar/HomePage";
import { RouteType } from "./config";
import CalendarPage from "../pages/dashboard/CalendarPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import WebsitePage from "../pages/dashboard/WebsitePage";
import UpdatesPage from "../pages/dashboard/UpdatesPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import PermDataSettingOutlinedIcon from '@mui/icons-material/PermDataSettingOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import MainPage from "../pages/sidebar/MainPage";
import ProjectsPage from "../pages/dashboard/ProjectsPage";
import StaffMeetingPage from "../pages/staffmeeting/StaffMeetingPage";
import sizeConfigs from "../configs/sizeConfigs";
import { Typography } from "@mui/material";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <MainPage />,
    state: "main"
  },
  //installation
  {
    path: "/home",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      //Default
      {
        path: "/dashboard/calendar",
        element: <CalendarPage />,
        state: "dashboard.calendar",
        sidebarProps: {
          displayText: "Calendar",
          icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 18 }}/>
        },
      },
      //Analytics
      {
        path: "/dashboard/Updates",
        element: <UpdatesPage />,
        state: "dashboard.updates",
        sidebarProps: {
          displayText: "Updates",
          icon: <NotListedLocationOutlinedIcon sx={{ fontSize: 18 }}/>
        }
      },
      //saas
      {
        path: "/dashboard/Website",
        element: <WebsitePage />,
        state: "dashboard.website",
        sidebarProps: {
          displayText: "Website",
          icon: <LanguageOutlinedIcon sx={{ fontSize: 18 }}/>
        }
      },
      {
        path: "/dashboard/Projects",
        element: <ProjectsPage />,
        state: "dashboard.projects",
        sidebarProps: {
          displayText: "Projects",
          icon: <PermDataSettingOutlinedIcon sx={{ fontSize: 18 }}/>
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Alert"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Button"
        }
      }
    ]
  },
  {
    path: "/staffmeeting",
    element: <StaffMeetingPage />,
    state: "staffmeeting",
    sidebarProps: {
      displayText: "StaffMeeting",
      icon: <Diversity3OutlinedIcon sx={{ fontSize: 18 }}/>
    }
  }
];

export default appRoutes;