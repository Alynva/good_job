import React from "react"
import { createDrawerNavigator, createAppContainer } from "react-navigation"
import LandingPageScreen from "../screens/LandingPageScreen"
import CompanyPageScreen from "../screens/CompanyPageScreen"
import JobPageScreen from "../screens/JobPageScreen"
import ChatPageScreen from "../screens/ChatPageScreen"
import SideBar from "./SideBar.js"
import LoginPageScreen from "../screens/LoginScreen"

export default createAppContainer(createDrawerNavigator(
    {
        LandingPage: { screen: LandingPageScreen, path: "LandingPage" },
        CompanyPage: { screen: CompanyPageScreen, path: "CompanyPage" },
        JobPage: { screen: JobPageScreen, path : "JobPage" },
        ChatPage: { screen: ChatPageScreen, path: "ChatPage" },
        LoginPage: { screen: LoginPageScreen, path: "LoginPage" }
    }, {
        contentComponent: props => <SideBar {...props} />,
        initialRouteName: "LandingPage"
    }
))