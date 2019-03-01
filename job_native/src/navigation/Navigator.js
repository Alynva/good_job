import React from "react"
import { createDrawerNavigator, createAppContainer } from "react-navigation"
import LandingPageScreen from "../screens/LandingPageScreen"
import CompanyPageScreen from "../screens/CompanyPageScreen"
import LoginPageScreen from "../screens/LoginScreen"
import SideBar from "./SideBar.js"

export default createAppContainer(createDrawerNavigator(
    {
        LandingPage: { screen: LandingPageScreen, path: "LandingPage" },
        CompanyPage: { screen: CompanyPageScreen, path: "CompanyPage" },
        LoginPage: { screen: LoginPageScreen, path: "LoginPage" }
    }, {
        contentComponent: props => <SideBar {...props} />,
        initialRouteName: "LandingPage"
    }
))