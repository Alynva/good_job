import React from "react"
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation"
import LandingPageScreen from "../screens/LandingPageScreen"
import CompanyPageScreen from "../screens/CompanyPageScreen"
import JobPageScreen from "../screens/JobPageScreen"
import ChatPageScreen from "../screens/ChatPageScreen"
import SideBar from "./SideBar.js"
import LoginPageScreen from "../screens/LoginScreen"

const Router = createStackNavigator(
    {
        LandingPage: { screen: LandingPageScreen, path: "LandingPage" },
        CompanyPage: { screen: CompanyPageScreen, path: "CompanyPage" },
        JobPage: { screen: JobPageScreen, path : "JobPage" },
        ChatPage: { screen: ChatPageScreen, path: "ChatPage" },
        LoginPage: { screen: LoginPageScreen, path: "LoginPage" }
    }, {
        initialRouteName: "LandingPage",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)

export default createAppContainer(createDrawerNavigator(
    {
        Router: Router
    }, {
        contentComponent: props => <SideBar {...props} />
        
    }
))